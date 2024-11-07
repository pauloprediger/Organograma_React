import React from 'react';
import './Time.css';
import PropTypes from 'prop-types';
import { Colaborador } from '../Colaborador';
import hexToRgba from 'hex-to-rgba';

export const Time = ({ id, titulo, cor, colaboradores, aoDeletar, mudarCor, aoFavoritar}) => {
  const estiloSection = {
    backgroundColor: hexToRgba(cor, '0.6')
  };
  const estiloTitulo = {
    borderColor: cor
  };

  return (
    colaboradores.length > 0 && (
      <section style={estiloSection} className='time'>
        <h3 style={estiloTitulo}>{titulo}</h3>
        <div className='colaboradores-container'>
          <input
            onChange={evento => mudarCor(evento.target.value, id)}
            value={cor}
            type='color'
            className='input-cor'
          />
          {colaboradores.map(colaborador => (
            <Colaborador
              key={colaborador.id}
              colaborador={colaborador}
              corCabecalho={colaborador.corCabecalho}
              aoDeletar={() => aoDeletar(colaborador.id)}
              aoFavoritar = {aoFavoritar}
            />
          ))}
        </div>
      </section>
    )
  );
};

Time.propTypes = {
  titulo: PropTypes.string.isRequired,
  cor: PropTypes.string.isRequired,
  colaboradores: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      nome: PropTypes.string.isRequired,
      cargo: PropTypes.string.isRequired,
      corCabecalho: PropTypes.string.isRequired,
      imagem: PropTypes.string,
    })
  ).isRequired,
  aoDeletar: PropTypes.func.isRequired,
  mudarCor: PropTypes.func.isRequired,
};
