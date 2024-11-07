import { useState } from 'react';
import './Campo.css';
import PropTypes from 'prop-types';

export const Campo = (props) => {


  const aoDigitado = (event) => {
    props.onChange(event);
  }

  return (
    <div className={`campo campo-${props.type}`}>
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

Campo.propTypes = {
  id : PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf (['text', 'email', 'password', 'number', 'color']),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  obrigatorio: PropTypes.bool,
};
