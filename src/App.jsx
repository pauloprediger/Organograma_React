import Banner from './components/Banner'
import { Formulario } from './components/Formulario'
import './App.css'
import { useState } from 'react'
import { Time } from './components/Time';
import { Rodape } from './components/Rodape';

function App() {
  const times = [
    { id: 1, name: 'Programação', corPrimaria: '#57C278', corSecundaria: '#D9F7E9'},
    { id: 2, name: 'Front End', corPrimaria: '#82CFFA', corSecundaria: '#E8F8FF'},
    { id: 3, name: 'Data Science', corPrimaria: '#A6D157', corSecundaria: '#F0F8E2'},
    { id: 4, name: 'Devops', corPrimaria: '#E06B69', corSecundaria: '#FDE7E8'},
    { id: 5, name: 'Ux e Design', corPrimaria: '#DB6EBF', corSecundaria: '#FAE9F5'},
    { id: 6, name: 'Mobile', corPrimaria: '#FFBA05', corSecundaria: '#FFF5D9'},
    { id: 7, name: 'Inovação e Gestão', corPrimaria: '#FF8A29', corSecundaria: '#FFEEDF'}
  ];
  
  const [colaboradores, setColaboradores] = useState([]);

  const aoNovoColaboradorAdicionado = (colaborador) => {
    const time = times.find(t => t.name === colaborador.time);  // Encontra o time correspondente
    if (time) {
      setColaboradores([...colaboradores, { 
        ...colaborador, 
        id: (colaboradores.length + 1).toString(), 
        corCabecalho: time.corPrimaria  // Define corCabecalho corretamente com corPrimaria do time
      }]);
    }
  };

  return (
    <div className='corpo'>
      <section className='section_corpo'>
        <Banner/>
        <Formulario 
          times={times.map(time => time.name)} 
          aoColaboradorCadastrado={aoNovoColaboradorAdicionado}
        />
        {times
        .filter(time => colaboradores.some(colaborador => colaborador.time === time.name))
        .map(time => (
          <Time 
            key={time.id}
            titulo={time.name}
            corSecundaria={time.corSecundaria}
            corPrimaria={time.corPrimaria}
            colaboradores={colaboradores.filter(colaborador => colaborador.time === time.name)}
          />
        ))}
        <Rodape/>
      </section>
    </div>
  )
}

export default App;
