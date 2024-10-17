import React from 'react'
import './ListaSuspensa.css'
import { useState } from 'react';
import PropTypes from 'prop-types';

const ListaSuspensa = (props) => {
const[itemSelecionado, setItemSelecionado] = useState('');

const handleChange = (event) => {
    setItemSelecionado(event.target.value);
}

  return (
    <div className='listaSuspensa'>
        <label>{props.label}</label>
        <select
            required = {props.obrigatorio}
            id={props.id}
            value={itemSelecionado}
            onChange={handleChange}
        >
            {props.itens.map(item => <option key = {item.id}>{item.name}</option>)}
        </select>
    </div>
  )
}

ListaSuspensa.propTypes = {
    id : PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    itens: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired,
    obrigatorio: PropTypes.bool.isRequired, 
}

export default ListaSuspensa



