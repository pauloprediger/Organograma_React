import { Formulario } from "./components/Formulario";
import { Banner } from "./components/Banner";
import { useEffect, useState } from "react";
import { Time } from "./components/Time";
import { Rodape } from "./components/Rodape";
import { v4 as uuidv4 } from "uuid";
import { MdOutlineVisibility } from "react-icons/md";

import "./App.css";
import { IColaborador } from "./shared/interfaces/IColaborador";


function App() {
  const [times, setTimes] = useState([
    { id: uuidv4(), name: "Programação", cor: "#57C278" },
    { id: uuidv4(), name: "Front End", cor: "#82CFFA" },
    { id: uuidv4(), name: "Data Science", cor: "#A6D157" },
    { id: uuidv4(), name: "Devops", cor: "#E06B69" },
    { id: uuidv4(), name: "Ux e Design", cor: "#DB6EBF" },
    { id: uuidv4(), name: "Mobile", cor: "#FFBA05" },
    { id: uuidv4(), name: "Inovação e Gestão", cor: "#FF8A29" },
  ]);

  const [colaboradores, setColaboradores] = useState<IColaborador[]>([]);
  const [formVisible, setFormVisible] = useState(true);

  useEffect(() => {
    console.log("🔄 Buscando dados...");

    // Busque os dados apenas quando o estado de colaboradores estiver vazio
    if (colaboradores.length === 0) {
      fetch("http://localhost:3000/pessoas")
        .then((res) => res.json())
        .then((dados) => {
          console.log("✅ Dados recebidos:", dados);

          const urlImagemPadrao = "images/user.png";

            setColaboradores(
            dados.map((pessoa: IColaborador) => {
              const timeEncontrado = times.find((t) => t.name === pessoa.time);
              return {
              ...pessoa,
              id: uuidv4(),
              corCabecalho: timeEncontrado ? timeEncontrado.cor : "#000",
              favorite: false,
              imagem: pessoa.imagem || urlImagemPadrao,
              };
            })
            );
        })
        .catch((erro) => console.error("❌ Erro ao buscar dados:", erro));
    }
  }, [times, colaboradores]);

  // Função para adicionar colaborador
  const aoNovoColaboradorAdicionado = (colaborador : IColaborador) => {
    const time = times.find((t) => t.name === colaborador.time);
    const urlImagemPadrao = "images/user.png";

    if (time) {
      setColaboradores((prevColaboradores) => [
        ...prevColaboradores,
        {
          ...colaborador,
          id: uuidv4(),
          corCabecalho: time.cor,
          favorite: false,
          imagem: colaborador.imagem || urlImagemPadrao,
        },
      ]);
    }
  };

  // Função para deletar colaborador
  function deletaColaborador(id: string) {
    setColaboradores(
      colaboradores.filter((colaborador) => colaborador.id !== id)
    );
  }

  // Muda a cor de um time e dos colaboradores relacionados
  function mudarCorDoTime(cor: string, id: string) {
    setTimes((prevTimes) =>
      prevTimes.map((time) => (time.id === id ? { ...time, cor } : time))
    );

    setColaboradores((prevColaboradores) =>
      prevColaboradores.map((colaborador) =>
        times.some((t) => t.id === id && colaborador.time === t.name)
          ? { ...colaborador, corCabecalho: cor }
          : colaborador
      )
    );
  }

  // Cadastra um novo time

  interface Time {
    id: string;
    name: string;
    cor: string;
  }

  function cadastrarTime(novoTime: { name: string; cor: string }) {
    const timeComId = { ...novoTime, id: uuidv4() }; 
    setTimes((prevTimes) => [...prevTimes, timeComId]);
  }

  // Alterna favorito
  function resolverFavorito(id : string) {
    setColaboradores(
      colaboradores.map((colaborador) =>
        colaborador.id === id
          ? { ...colaborador, favorite: !colaborador.favorite }
          : colaborador
      )
    );
  }

  // Alterna visibilidade do formulário
  const toggleFormVisibility = () => {
    setFormVisible((prevState) => !prevState);
  };

  return (
    <div className="corpo">
      <section className="section_corpo">
        <Banner
          enderecoImagem="./images/banner.png"
          textoAlternativo="Banner"
        />

        {formVisible && (
          <Formulario
            cadastrarTime={cadastrarTime}
            times={times}
            aoColaboradorCadastrado={aoNovoColaboradorAdicionado}
          />
        )}

        <footer>
          <h1 className="tittle-footer">Minha Organização:</h1>
          <button onClick={toggleFormVisibility} className="buttonFotter">
            <MdOutlineVisibility size={30} className="img-button" />
          </button>
        </footer>

        {colaboradores.length > 0 ? (
          times
            .filter((time) =>
              colaboradores.some(
                (colaborador) => colaborador.time === time.name
              )
            )
            .map((time) => (
              <Time
                key={time.id}
                titulo={time.name}
                cor={time.cor}
                colaboradores={colaboradores.filter(
                  (colaborador) => colaborador.time === time.name
                )}
                aoDeletar={deletaColaborador}
                mudarCor={(novaCor) => mudarCorDoTime(novaCor, time.id)}
                aoFavoritar={resolverFavorito}
              />
            ))
        ) : (
          <p>Ainda sem colaboradores...</p>
        )}

        <Rodape />
      </section>
    </div>
  );
}

export default App;
