import './ListaSuspensa.css'
import PropTypes from 'prop-types';

const ListaSuspensa = (props) => {

  return (
    <div className='listaSuspensa'>
        <label>{props.label}</label>
        <select
            required = {props.obrigatorio}
            id={props.id}
            value={props.value}
            onChange={props.onChange}
        >
          <option value="" disabled>Selecione um time</option>
          {props.itens.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
    </div>
  )
}

ListaSuspensa.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  itens: PropTypes.arrayOf(PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
  })).isRequired,
  obrigatorio: PropTypes.bool.isRequired,
};

export default ListaSuspensa



