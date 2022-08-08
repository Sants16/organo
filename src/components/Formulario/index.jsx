import React from 'react';
import CampoTexto from '../CampoTexto';
import styles from './Formulario.module.css'
const Formulario = () => {
    return ( 
        <section className={styles.formulario}>
            <form>
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto text='Nome:' name='nome' placeholder='Digite seu nome'/>
            <CampoTexto text='Cargo:' name='cargo' placeholder='Digite seu cargo'/>
            <CampoTexto text='Imagem:' name='imagem' placeholder='Digite o endereço da imagem'/>
            </form>
        </section>
     );
}
 
export default Formulario;