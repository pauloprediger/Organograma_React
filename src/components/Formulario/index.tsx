import { IColaborador } from "../../shared/interfaces/IColaborador"; // Certifique-se de importar a interface IColaborador
import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import Campo from "../Campo";
import { ListaSuspensa } from "../ListaSuspensa";
import { Botao } from "../Botao";
import "./Formulario.css";

interface FormularioProps {
  aoColaboradorCadastrado: (colaborador: IColaborador) => void; // Alterado para IColaborador
  times: { id: string; name: string; cor: string }[];
  cadastrarTime: (time: { name: string; cor: string }) => void;
}

export const Formulario = ({
  aoColaboradorCadastrado,
  times,
  cadastrarTime,
}: FormularioProps) => {
  const [nome, setNome] = useState("");
  const [cargo, setCargo] = useState("");
  const [imagem, setImagem] = useState("");
  const [time, setTime] = useState("");
  const [nomeTime, setNomeTime] = useState("");
  const [corTime, setCorTime] = useState("#000000");

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Definindo o colaborador usando a interface IColaborador
    const colaborador: IColaborador = {
      id: uuidv4(), // Gerando um id único para o colaborador
      nome,
      cargo,
      imagem,
      time,
      corCabecalho: times.find((t) => t.name === time)?.cor || "#000", // Definindo a cor do cabeçalho com base no time
      favorite: false, // Inicialmente o colaborador não é favorito
    };

    aoColaboradorCadastrado(colaborador); // Passando o colaborador com base na interface
    setNome("");
    setCargo("");
    setImagem("");
    setTime("");
  };

  const handleTimeSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    cadastrarTime({ name: nomeTime, cor: corTime });
    setNomeTime("");
    setCorTime("#000000");
  };

  return (
    <section className="formulario-container">
      {/* Formulário de cadastro de colaborador */}
      <form onSubmit={handleSubmit} className="formulario">
        <h2 className="tituloFormulario">
          Preencha os dados para criar o card de colaborador
        </h2>
        <Campo
          label="Nome"
          type="text"
          id="nome"
          value={nome}
          aoAlterado={setNome}
          placeholder="Digite seu nome"
          obrigatorio
        />
        <Campo
          label="Cargo"
          type="text"
          id="cargo"
          value={cargo}
          aoAlterado={setCargo}
          placeholder="Digite seu cargo"
          obrigatorio
        />
        <Campo
          label="Imagem"
          type="text"
          id="imagem"
          value={imagem}
          aoAlterado={setImagem}
          placeholder="Digite o endereço da imagem"
        />

        <ListaSuspensa
          id="time"
          onChange={(e) => setTime(e.target.value)}
          value={time}
          label="Time:"
          itens={times}
          obrigatorio
        />

        <Botao type="submit">
          <span>Criar Card</span>
        </Botao>
      </form>

      {/* Formulário de cadastro de time */}
      <form onSubmit={handleTimeSubmit} className="formulario">
        <h2 className="tituloFormulario">
          Preencha os dados para criar um novo time
        </h2>
        <Campo
          label="Nome"
          type="text"
          id="nomeTime"
          value={nomeTime}
          aoAlterado={setNomeTime}
          placeholder="Digite o nome do Time"
          obrigatorio
        />
        <Campo
          label="Cor"
          type="color"
          id="cor"
          value={corTime}
          aoAlterado={setCorTime}
          placeholder="Digite o código da cor"
          obrigatorio
        />

        <Botao type="submit">
          <span>Criar novo Time</span>
        </Botao>
      </form>
    </section>
  );
};
