import React from 'react'
import './Time.css'
import PropTypes from 'prop-types'

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
        <h3 style={estiloTitulo} >{props.tituloTime}</h3>
    </section>
  )
}
Time.propTypes = {
    tituloTime: PropTypes.string.isRequired,
    corPrimaria: PropTypes.string.isRequired,
    corSecundaria: PropTypes.string.isRequired,
} 


