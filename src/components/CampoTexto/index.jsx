import './CampoTexto.css';
import PropTypes from 'prop-types';

export const CampoTexto = (props) => {
  return (
    <div className='campo-texto'>
        <label htmlFor={props.id}> {props.label}:</label>
        <input
            type= {props.type}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
            placeholder = {`${props.placeholder}...`}
        />
    </div>
  );
};

CampoTexto.propTypes = {
  id : PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf (['text', 'email', 'password', 'numer']),
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
};