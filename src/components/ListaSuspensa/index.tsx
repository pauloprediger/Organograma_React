import './ListaSuspensa.css'

interface ListaSuspensaProps { 
  id: string;
  label: string;
  value: string;
  onChange: (evento: React.ChangeEvent<HTMLSelectElement>) => void;
  itens: { id: string, name: string }[];
  obrigatorio: boolean;
}

export const ListaSuspensa = ({id, label, value, onChange, itens, obrigatorio}: ListaSuspensaProps) => {

  return (
    <div className='listaSuspensa'>
        <label>{label}</label>
        <select
            required = {obrigatorio}
            id={id}
            value={value}
            onChange={onChange}
        >
          <option value="" disabled>Selecione um time</option>
          {itens.map((item) => (
            <option key={item.id} value={item.name}>
              {item.name}
            </option>
          ))}
        </select>
    </div>
  )
}

export default ListaSuspensa



