import React from 'react'
import './Card.css'

export const Colaborador = (props) => {
  return (
    <div className='colaborador'>
        <div className='cabecalho'>
            <img src = 'https://github.com/pauloprediger.png' alt = ''/>
        </div>
        <div className='rodape'>
            <h4>Paulo Prediger</h4>
            <h5>Desenvolvedor front-end</h5>
        </div>
    </div>
  )
}
