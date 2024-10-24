import { useState } from 'react';
import './CampoTexto.css';
import PropTypes from 'prop-types';

export const CampoTexto = (props) => {


  const aoDigitado = (event) => {
    props.onChange(event);
  }

  return (
    <div className='campo-texto'>
        <label htmlFor={props.id}> {props.label}:</label>
        <input
            type= {props.type}
            id={props.id}
            value={props.value}
            onChange={aoDigitado}
            placeholder = {`${props.placeholder}...`}
            required = {props.obrigatorio}
        />
    </div>
  );
};

CampoTexto.propTypes = {
  id : PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf (['text', 'email', 'password', 'number']),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  obrigatorio: PropTypes.bool,
};
