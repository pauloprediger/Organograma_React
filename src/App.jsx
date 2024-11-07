import Banner from './components/Banner';
import { Formulario } from './components/Formulario';
import './App.css';
import { useState } from 'react';
import { Time } from './components/Time';
import { Rodape } from './components/Rodape';
import { v4 as uuidv4 } from 'uuid';


function App() {
  // Estado para a lista de times
  const [times, setTimes] = useState([
    { id: uuidv4(), name: 'Programação', cor: '#57C278' },
    { id: uuidv4(), name: 'Front End', cor: '#82CFFA' },
    { id: uuidv4(), name: 'Data Science', cor: '#A6D157' },
    { id: uuidv4(), name: 'Devops', cor: '#E06B69' },
    { id: uuidv4(), name: 'Ux e Design', cor: '#DB6EBF' },
    { id: uuidv4(), name: 'Mobile', cor: '#FFBA05' },
    { id: uuidv4(), name: 'Inovação e Gestão', cor: '#FF8A29' }
  ]);

  // Estado para a lista de colaboradores
  const [colaboradores, setColaboradores] = useState([]);

  // Deleta um colaborador pelo ID
  function deletaColaborador(id) {
    setColaboradores(colaboradores.filter(colaborador => colaborador.id !== id));
  }

  // Adiciona um novo colaborador
  const aoNovoColaboradorAdicionado = (colaborador) => {
    const time = times.find(t => t.name === colaborador.time);
    if (time) {
      setColaboradores([...colaboradores, {
        ...colaborador,
        id: uuidv4(), // Gera um ID único
        corCabecalho: time.cor, // Define a cor do cabeçalho
        favorite: false
      }]);
    }
  };

  // Muda a cor de um time
  function mudarCorDoTime(cor, id) {
    setTimes(times.map(time => {
      if (time.id === id) {
        return { ...time, cor }; // Atualiza a cor do time
      }
      return time; // Retorna o time inalterado
    }));

    // Atualiza a corCabecalho dos colaboradores do time
    setColaboradores(colaboradores.map(colaborador => {
      const time = times.find(t => t.id === id);
      if (colaborador.time === time.name) {
        return { ...colaborador, corCabecalho: cor }; // Atualiza a cor do cabeçalho
      }
      return colaborador; // Retorna o colaborador inalterado
    }));
  }

  // Cadastra um novo time
  function cadastrarTime(novoTime) {
    setTimes(prevTimes => {
      const updatedTimes = [...prevTimes, { ...novoTime, id: uuidv4() }];
      console.log("Times atualizados", updatedTimes);
      return updatedTimes; // Retorna a lista atualizada
    });
  }

  function resolverFavorito(id) {
    setColaboradores(colaboradores.map(colaborador => {
      if (colaborador.id === id) colaborador.favorite = !colaborador.favorite;
      return colaborador
    }))
  }

  // Renderiza o componente App
  return (
    <div className='corpo'>
      <section className='section_corpo'>
        <Banner />
        <Formulario
          cadastrarTime={cadastrarTime}
          times={times}
          aoColaboradorCadastrado={aoNovoColaboradorAdicionado}
        />
        {/* Renderiza componentes Time apenas para os times que têm colaboradores */}
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
              aoFavoritar={resolverFavorito}
            />
          ))}
        <Rodape />
      </section>
    </div>
  );
}

export default App; // Exporta o componente App
