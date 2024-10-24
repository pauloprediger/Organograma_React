import React from 'react'
import './Card.css'
import PropTypes from 'prop-types'

export const Colaborador = ({nome, imagem, cargo, corCabecalho}) => {
  return (
    <div className='colaborador'>
        <div className='cabecalho' style={{backgroundColor: corCabecalho}}>
            <img src = {imagem} alt = {nome}/>
        </div>
        <div className='rodape'>
            <h4>{nome}</h4>
            <h5>{cargo}</h5>
        </div>
    </div>
  )
}

Colaborador.propTypes = {
  nome: PropTypes.string.isRequired,
  cargo: PropTypes.string.isRequired,
  corCabecalho: PropTypes.string.isRequired,
  imagem: PropTypes.string,  // A imagem pode ser opcional
};