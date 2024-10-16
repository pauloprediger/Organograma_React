import React,{useState} from 'react'
import './formulario.css';
import { CampoTexto } from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import { Botao } from '../Botao';

export const Formulario = () => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const times = [
        { id: 1, name: 'Programação' },
        { id: 2, name: 'Front End' },
        { id: 3, name: 'Data Science' },
        { id: 4, name: 'Devops' },
        { id: 5, name: 'Ux e Design' },
        { id: 6, name: 'Mobile' },
        { id: 7, name: 'Inovação e Gestão' }
    ];

    const handleSubmit = (event) => {
        event.preventDefault();
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
            />
            <CampoTexto
                label="Cargo"
                type="text"
                id="cargo"
                value={cargo}
                onChange={(e) => setCargo(e.target.value)}
                placeholder="Digite seu cargo"
            />
            <CampoTexto
                label="Imagem"
                type="text"
                id="imagem"
                placeholder="Digite o endereço da imagem"
                value={imagem}
                onChange={(e) => setImagem(e.target.value)}
            />
            <ListaSuspensa label = "Time:" itens = {times}/>
            <Botao type='submit'>
                Criar Card
            </Botao>
        </form>
    </section>
)
}
