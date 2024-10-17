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
            {props.itens.map((item, index) => (
                <option key={index} value={item}>
                    {item}
                </option>
             ))}
        </select>
    </div>
  )
}

ListaSuspensa.propTypes = {
    id : PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.any.isRequired,
    onChange: PropTypes.func.isRequired,
    itens: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number.isRequired,
            name: PropTypes.string.isRequired
        })
    ).isRequired,
    obrigatorio: PropTypes.bool.isRequired, 
}

export default ListaSuspensa



