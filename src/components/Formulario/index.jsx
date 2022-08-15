import React from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import styles from './Formulario.module.css'
const Formulario = () => {

    const times = [
        'Programação',
        'Front-End',
        'Data Science',
        'Devops',
        'UX e Design',
        'Mobile',
        'Inovação e Gestão'
    ]

    function pararEventoPadrao(e){
        e.preventDefault()
        console.log('bruh')
    }

    return ( 
        <section className={styles.formulario}>
            <form onSubmit={pararEventoPadrao}>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto text='Nome:' name='nome' placeholder='Digite seu nome'/>
            <CampoTexto text='Cargo:' name='cargo' placeholder='Digite seu cargo'/>
            <CampoTexto text='Imagem:' name='imagem' placeholder='Digite o endereço da imagem'/>
            <ListaSuspensa label='Time' itens={times}/>
            <Botao>
                Criar Card
            </Botao>
            </form>
        </section>
     );
}
 
export default Formulario;