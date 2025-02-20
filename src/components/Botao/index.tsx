import React, { ReactElement } from 'react'
import './Botao.css'
import PropTypes from 'prop-types';

interface BotaoProps { 
  children: ReactElement;
}


export const Botao = (props : BotaoProps) => {
  return (
    <button 
        className='buttonFormulario'
    >
      {props.children}
    </button>
  )
}
Botao.propTypes = {
    children: PropTypes.node.isRequired,
    type: PropTypes.string.isRequired
}


