import React from 'react';
import './Colaborador.css';
import PropTypes from 'prop-types';
import { AiFillCloseCircle } from 'react-icons/ai';

export const Colaborador = ({ colaborador, corCabecalho, aoDeletar }) => {
  return (
    <div className='colaborador'>
      <AiFillCloseCircle
        size={25}
        className='deletarColaborador'
        onClick={aoDeletar} // Passando a função corretamente
      />
      <div className='cabecalho' style={{ backgroundColor: corCabecalho }}>
        <img src={colaborador.imagem} alt={colaborador.nome} />
      </div>
      <div className='rodape'>
        <h4>{colaborador.nome}</h4>
        <h5>{colaborador.cargo}</h5>
      </div>
    </div>
  );
};

Colaborador.propTypes = {
  colaborador: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    cargo: PropTypes.string.isRequired,
    imagem: PropTypes.string, // A imagem pode ser opcional
  }).isRequired,
  corCabecalho: PropTypes.string.isRequired,
  aoDeletar: PropTypes.func.isRequired, // Assumindo que aoDeletar é uma função obrigatória
};
