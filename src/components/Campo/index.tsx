import React from 'react';
import './Campo.css';
import PropTypes from 'prop-types';

interface CampoProps {
  id: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'color';
  value: string;
  aoAlterado: (valor: string) => void;
  placeholder: string;
  obrigatorio: boolean;
}

 
const Campo = ( props :CampoProps) => {

  const aoDigitado = (event: React.SyntheticEvent<InputEvent>) => {
    props.aoAlterado(event.target.value);
  }

  return (
    <div className={`campo campo-${props.type}`}>
        <label htmlFor={props.id}> {props.label}:</label>
        <input
            type= {props.type}
            id={props.id}
            value={props.value}
            onChange={event => aoDigitado}
            placeholder = {`${props.placeholder}...`}
            required = {props.obrigatorio}
        />
    </div>
  );
};

export default Campo

Campo.propTypes = {
  id : PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf (['text', 'email', 'password', 'number', 'color']),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  obrigatorio: PropTypes.bool,
};
