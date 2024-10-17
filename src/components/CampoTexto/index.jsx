import './CampoTexto.css';
import PropTypes from 'prop-types';

export const CampoTexto = (props) => {
  const aoDigitar = (event) => {
    props.onChange(event);
    console.log(event.target.value)
  }

  return (
    <div className='campo-texto'>
        <label htmlFor={props.id}> {props.label}:</label>
        <input
            type= {props.type}
            id={props.id}
            value={props.value}
            onChange={aoDigitar}
            placeholder = {`${props.placeholder}...`}
            required = {props.obrigatorio}
        />
    </div>
  );
};

CampoTexto.propTypes = {
  id : PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf (['text', 'email', 'password', 'numer']),
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  placeholder: PropTypes.string,
  obrigatorio: PropTypes.bool,
};