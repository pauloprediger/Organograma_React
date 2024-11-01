import Banner from './components/Banner';
import { Formulario } from './components/Formulario';
import './App.css';
import { useState } from 'react';
import { Time } from './components/Time';
import { Rodape } from './components/Rodape';
import {v4 as uuidv4} from 'uuid';

function App() {
  const [times, setTimes] = useState([
    { id: uuidv4(), name: 'Programação', cor: '#57C278' },
    { id: uuidv4(), name: 'Front End', cor: '#82CFFA' },
    { id: uuidv4(), name: 'Data Science', cor: '#A6D157' },
    { id: uuidv4(), name: 'Devops', cor: '#E06B69' },
    { id: uuidv4(), name: 'Ux e Design', cor: '#DB6EBF' },
    { id: uuidv4(), name: 'Mobile', cor: '#FFBA05' },
    { id: uuidv4(), name: 'Inovação e Gestão', cor: '#FF8A29' }
  ]);

  const [colaboradores, setColaboradores] = useState([]);

  function deletaColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  const aoNovoColaboradorAdicionado = (colaborador) => {
    const time = times.find(t => t.name === colaborador.time);
    if (time) {
      setColaboradores([...colaboradores, {
        ...colaborador,
        id: (colaboradores.length + 1).toString(),
        corCabecalho: time.cor
      }]);
    }
  };

  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        return { 
          ...time, 
          cor 
        };
      }
      return time;
    }));
    // Atualiza a corCabecalho dos colaboradores
    setColaboradores(colaboradores.map(colaborador => {
      const time = times.find(t => t.id === id);
      if (colaborador.time === time.name) {
        return { ...colaborador, corCabecalho: cor };
      }
      return colaborador;
    }));
  }

  //Função para cadastrar times
  function cadastrarTime(novoTime) {
    setTimes(prevTimes => {
      const updatedTimes = [...prevTimes, {...novoTime, id: uuidv4()}];
      console.log("Times atualizados", updatedTimes);
      return updatedTimes; 
    });
    }
      

  return (
    <div className='corpo'>
      <section className='section_corpo'>
        <Banner />
        <Formulario
          cadastrarTime = {cadastrarTime}
          times={times}
          aoColaboradorCadastrado={aoNovoColaboradorAdicionado}
        />
        {times
          .filter(time => colaboradores.some(colaborador => colaborador.time === time.name))
          .map(time => (
            <Time
              key={time.id}
              titulo={time.name}
              cor={time.cor}
              colaboradores={colaboradores.filter(colaborador => colaborador.time === time.name)}
              aoDeletar={deletaColaborador}
              mudarCor={(novaCor) => mudarCorDoTime(novaCor, time.id)}
            />
          ))}
        <Rodape />
      </section>
    </div>
  );
}

export default App;