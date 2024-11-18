import Banner from './components/Banner';
import { Formulario } from './components/Formulario';
import { useEffect, useState } from 'react';
import { Time } from './components/Time';
import { Rodape } from './components/Rodape';
import { Botao } from './components/Botao';
import { v4 as uuidv4 } from 'uuid';
import { MdOutlineVisibility } from "react-icons/md";

import './App.css';

function App() {
  // Estado para a lista de times
  const [times, setTimes] = useState([
    { id: uuidv4(), name: 'Programação', cor: '#57C278' },
    { id: uuidv4(), name: 'Front End', cor: '#82CFFA' },
    { id: uuidv4(), name: 'Data Science', cor: '#A6D157' },
    { id: uuidv4(), name: 'Devops', cor: '#E06B69' },
    { id: uuidv4(), name: 'Ux e Design', cor: '#DB6EBF' },
    { id: uuidv4(), name: 'Mobile', cor: '#FFBA05' },
    { id: uuidv4(), name: 'Inovação e Gestão', cor: '#FF8A29' }
  ]);

  // Estado para a lista de colaboradores
  const [colaboradores, setColaboradores] = useState([]);

  useEffect(() => {
    console.log("useEffect rodando...");
    fetch('http://localhost:8080/pessoas')
      .then(resposta => resposta.json())
      .then(dados => {
        console.log("Dados recebidos:", dados);
        const urlImagemPadrao = 'images/user.png';
        // Mapear os dados recebidos para incluir o ID, a cor do cabeçalho, e o atributo 'favorite'
        const colaboradoresFormatados = dados.map(pessoa => {
          const time = times.find(t => t.name === pessoa.time);
          return {
            ...pessoa,
            id: uuidv4(), // Gera um ID único
            corCabecalho: time ? time.cor : '#000', // Define a cor do cabeçalho com base no time
            favorite: false, // Adiciona o atributo 'favorite' como false
            imagem: pessoa.imagem || urlImagemPadrao
          };
        });
        console.log("Colaboradores formatados:", colaboradoresFormatados);
        setColaboradores(colaboradoresFormatados); // Atualiza o estado com os colaboradores formatados
      })
      .catch(erro => console.error("Erro ao buscar dados:", erro));
  }, []);

  // Deleta um colaborador pelo ID
  function deletaColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  // Visibilidade do Formulário
  const [formVisible, setFormVisible] = useState(true);

  // Adiciona um novo colaborador
  const aoNovoColaboradorAdicionado = (colaborador) => {
    const time = times.find(t => t.name === colaborador.time);
    const urlImagemPadrao = 'images/user.png';
    if (time) {
      setColaboradores([...colaboradores, {
        ...colaborador,
        id: uuidv4(), // Gera um ID único
        corCabecalho: time.cor, // Define a cor do cabeçalho
        favorite: false,
        imagem: colaborador.imagem || urlImagemPadrao
      }]);
    }
  };

  // Muda a cor de um time
  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        return { ...time, cor }; // Atualiza a cor do time
      }
      return time; // Retorna o time inalterado
    }));

    // Atualiza a corCabecalho dos colaboradores do time
    setColaboradores(prevColaboradores => {
      return prevColaboradores.map(colaborador => {
        const time = times.find(t => t.id === id);
        if (colaborador.time === time.name) {
          return { ...colaborador, corCabecalho: cor }; // Atualiza a cor do cabeçalho
        }
        return colaborador; // Retorna o colaborador inalterado
      });
    });
  }

  // Cadastra um novo time
  function cadastrarTime(novoTime) {
    setTimes(prevTimes => {
      const updatedTimes = [...prevTimes, { ...novoTime, id: uuidv4() }];
      console.log("Times atualizados", updatedTimes);
      return updatedTimes; // Retorna a lista atualizada
    });
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favorite = !colaborador.favorite;
      return colaborador;
    }));
  }

  // Função para visibilidade do Formulário
  const toggleFormVisibility = () => {
    setFormVisible(prevState => !prevState);
  };

  console.log("Colaboradores no estado:", colaboradores); // Log do estado de colaboradores

  // Renderiza o componente App
  return (
    <div className='corpo'>
      <section className='section_corpo'>
        <Banner />
        {formVisible && (
          <Formulario
            cadastrarTime={cadastrarTime}
            times={times}
            aoColaboradorCadastrado={aoNovoColaboradorAdicionado}
          />
        )}
        <footer>
          <h1 className='tittle-footer'>Minha Organização:</h1>
          <button onClick={toggleFormVisibility} className='buttonFotter'>
            <MdOutlineVisibility size={30} className='img-button'/>
          </button>
        </footer>
        {/* Verifica se colaboradores tem itens antes de renderizar */}
        {colaboradores.length > 0 ? (
          times
            .filter(time => colaboradores.some(colaborador => colaborador.time === time.name))
            .map(time => (
              <Time
                key={time.id}
                titulo={time.name}
                cor={time.cor}
                colaboradores={colaboradores.filter(colaborador => colaborador.time === time.name)}
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
