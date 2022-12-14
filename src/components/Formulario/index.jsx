import React, { useState } from 'react';
import Botao from '../Botao';
import CampoTexto from '../CampoTexto';
import ListaSuspensa from '../ListaSuspensa';
import styles from './Formulario.module.css'
const Formulario = ({aoColaboradorCadastrado, times}) => {

    const [nome, setNome] = useState('')
    const [cargo, setCargo] = useState('')
    const [imagem, setImagem] = useState('')
    const [time, setTime] = useState('')

    const aoSalvar = (e) => {
        e.preventDefault()
        aoColaboradorCadastrado({
            nome,
            cargo,
            imagem,
            time
        })
    }

    return ( 
        <section className={styles.formulario}>
            <form onSubmit={aoSalvar}>
                
            <h2>Preencha os dados para criar o card do colaborador</h2>
            <CampoTexto 
            obrigatorio={true} 
            text='Nome:' 
            name='nome' 
            placeholder='Digite seu nome' 
            valor={nome} 
            aoAlterado={valor => setNome(valor)}
            />

            <CampoTexto 
            obrigatorio={true} 
            text='Cargo:' 
            name='cargo' 
            placeholder='Digite seu cargo' 
            valor={cargo} 
            aoAlterado={valor => setCargo(valor)}
            />

            <CampoTexto 
            text='Imagem:' 
            name='imagem' 
            placeholder='Digite o endereço da imagem' 
            valor={imagem} 
            aoAlterado={valor => setImagem(valor)}
            />

            <ListaSuspensa 
            obrigatorio={true} 
            label='Time' 
            itens={times} 
            valor={time} 
            aoAlterado={valor => setTime(valor)}
            />
            
            <Botao>
                Criar Card
            </Botao>

            </form>
        </section>
     );
}
 
export default Formulario;