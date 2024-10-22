import React,{useState, useEffect} from 'react'
import './formulario.css';
import { CampoTexto } from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import { Botao } from '../Botao';
import PropTypes from 'prop-types';

export const Formulario = (props) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        props.aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time,
        })
        setNome('');
        setCargo('');
        setImagem('');
        {/*setTime(props.times[0] || '');*/}
    }

    

  return (
    <section className='formulario'>
        <form onSubmit={handleSubmit}>
            <h2 className='tituloFormulario'>Preencha os dados para criar o card de colaborador</h2>
            <CampoTexto
                label="Nome"
                type="text"
                id="nome"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                placeholder="Digite seu nome"
                obrigatorio = {true}
            />
            <CampoTexto
                label="Cargo"
                type="text"
                id="cargo"
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
                placeholder="Digite seu cargo"
                obrigatorio = {true}
            />
            <CampoTexto
                label="Imagem"
                type="text"
                id="imagem"
                onChange={(e) => setImagem(e.target.value)}
                placeholder="Digite o endereço da imagem"
                value={imagem}
                obrigatorio = {true}
            />
            <ListaSuspensa 
                id="time" 
                onChange={(e) => setTime(e.target.value)}
                value={time}
                label = "Time:" 
                itens = {props.times}
                obrigatorio = {true}
            />
            <Botao type='submit'>
                Criar Card
            </Botao>
        </form>
    </section>
)
}
Formulario.propTypes = {
    aoColaboradorCadastrado : PropTypes.func.isRequired,
    times : PropTypes.arrayOf(PropTypes.string).isRequired,
}
