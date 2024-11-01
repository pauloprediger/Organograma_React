import React, { useState } from 'react';
import './Formulario.css';
import { CampoTexto } from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import { Botao } from '../Botao';
import PropTypes from 'prop-types';

export const Formulario = ({ aoColaboradorCadastrado, times, cadastrarTime }) => {  // Extraímos cadastrarTime de props
  const [nome, setNome] = useState('');
  const [cargo, setCargo] = useState('');
  const [imagem, setImagem] = useState('');
  const [time, setTime] = useState('');
  const [nomeTime, setNomeTime] = useState('');
  const [corTime, setCorTime] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    aoColaboradorCadastrado({
      nome,
      cargo,
      imagem,
      time,
    });
    setNome('');
    setCargo('');
    setImagem('');
    setTime('');
  };

  const handleTimeSubmit = (event) => {
    event.preventDefault();
    console.log("Novo time sendo adicionado:", { name: nomeTime, cor: corTime });
    cadastrarTime({ name: nomeTime, cor: corTime });
    setNomeTime('');
    setCorTime('');
  };

  return (
    <section className='formulario'>
      <form onSubmit={handleSubmit}>
        <h2 className='tituloFormulario'>Preencha os dados para criar o card de colaborador</h2>
        <CampoTexto
          label="Nome"
          type="text"
          id="nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
          placeholder="Digite seu nome"
          obrigatorio={true}
        />
        <CampoTexto
          label="Cargo"
          type="text"
          id="cargo"
          value={cargo}
          onChange={(e) => setCargo(e.target.value)}
          placeholder="Digite seu cargo"
          obrigatorio={true}
        />
        <CampoTexto
          label="Imagem"
          type="text"
          id="imagem"
          onChange={(e) => setImagem(e.target.value)}
          placeholder="Digite o endereço da imagem"
          value={imagem}
          obrigatorio={true}
        />
        <ListaSuspensa
          id="time"
          onChange={(e) => setTime(e.target.value)}
          value={time}
          label="Time:"
          itens={times}
          obrigatorio={true}
        />
        <Botao type='submit'>
          Criar Card
        </Botao>
      </form>

      <form onSubmit={handleTimeSubmit}>
        <h2 className='tituloFormulario'>Preencha os dados para criar um novo time</h2>
        <CampoTexto
          label="Nome"
          type="text"
          id="nomeTime"
          value={nomeTime}
          onChange={(e) => setNomeTime(e.target.value)}
          placeholder="Digite o nome do Time"
          obrigatorio
        />
        <CampoTexto
            label="Cor"
            type="text" // Tipo como texto
            id="cor" // ID do campo atualizado para "cor"
            value={corTime}
            onChange={(e) => setCorTime(e.target.value)}
            placeholder="Digite o código da cor, ex: #FFBA05"
            obrigatorio 
        />
        <Botao type='submit'>
          Criar novo Time
        </Botao>
      </form>
    </section>
  );
};

Formulario.propTypes = {
  aoColaboradorCadastrado: PropTypes.func.isRequired,
  times: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  })).isRequired,
  cadastrarTime: PropTypes.func.isRequired,  // Adicionado propType para cadastrarTime
};