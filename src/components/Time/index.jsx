import React from 'react'
import './Time.css'
import PropTypes from 'prop-types'
import { Colaborador } from '../Card'

export const Time = (props) => {
    const estiloSection = {
        backgroundColor: props.corSecundaria,
    }
    const estiloTitulo = {
        borderColor: props.corPrimaria
    }
  return (
    <section 
        style={estiloSection} 
        className='time'
    >
        <h3 style={estiloTitulo} >{props.titulo}</h3>
        <div className='colaboradores-container'>
            {props.colaboradores.map(colaborador =>(    
            <Colaborador 
                key = {colaborador.id} 
                nome = {colaborador.nome} 
                cargo = {colaborador.cargo} 
                imagem = {colaborador.imagem}
                corCabecalho={colaborador.corCabecalho}
            />
            ))}
        </div>
    </section>
  )
}
Time.propTypes = {
    titulo: PropTypes.string.isRequired,
    corPrimaria: PropTypes.string.isRequired,
    corSecundaria: PropTypes.string.isRequired,
    colaboradores: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.string.isRequired,
        nome: PropTypes.string.isRequired,
        cargo: PropTypes.string.isRequired,
        corCabecalho : PropTypes.string.isRequired,
        imagem: PropTypes.string,  // A imagem pode ser opcional
    })).isRequired,
};

