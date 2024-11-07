import React from 'react';
import './Colaborador.css';
import PropTypes from 'prop-types';
import { AiFillCloseCircle } from 'react-icons/ai';
import { AiFillHeart } from "react-icons/ai";
import { AiOutlineHeart } from "react-icons/ai";

export const Colaborador = ({ colaborador, corCabecalho, aoDeletar, aoFavoritar}) => {
  function favoritar() {
      aoFavoritar(colaborador.id)
  }
  const propsFavorito = {
    size: 25,
    onClick: favoritar
  }
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
        <div className='favoritar'>
            {colaborador.favorite 
              ? <AiFillHeart {...propsFavorito} color='#ff0000'/> 
              : <AiOutlineHeart {...propsFavorito}/>
            }
        </div>
      </div>
    </div>
  );
};

Colaborador.propTypes = {
  colaborador: PropTypes.shape({
    nome: PropTypes.string.isRequired,
    cargo: PropTypes.string.isRequired,
    imagem: PropTypes.string, // A imagem pode ser opcional
    favorite: PropTypes.bool.isRequired,
    id: PropTypes.string.isRequired
  }).isRequired,
  corCabecalho: PropTypes.string.isRequired,
  aoDeletar: PropTypes.func.isRequired, // Assumindo que aoDeletar é uma função obrigatória
  aoFavoritar: PropTypes.func.isRequired
};
