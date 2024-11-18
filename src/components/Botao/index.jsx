import React from 'react'
import './Botao.css'
import PropTypes from 'prop-types';

export const Botao = (props) => {
  return (
    <button 
        type={props.type} 
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


