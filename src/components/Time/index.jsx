import React from 'react';
import Colaborador from '../Colaborador';
import styles from './Time.module.css'
const Time = ({nome, corPrimaria, corSecundaria, colaboradores}) => {

    const css = {borderColor: corPrimaria}

    return ( 
        <section className={styles.time} style={{ backgroundColor: corSecundaria }}> {/* FAZENDO O CSS COM PROPS, a tag section de cada componente Time tera uma cor de fundo especifica de acordo com a props recebida e usamos duas {} uma dentro da outra pois caso não fosse usada 2 {} mas apenas uma o React iria ficar procurando uma variavel com o nome backgroundColor, a qual não existe */}
            <h3 style={css}>{nome}</h3>
            <div className={styles.colaboradores}>{colaboradores.map((colaborador) => <Colaborador nome={colaborador.nome} cargo={colaborador.cargo} imagem={colaborador.imagem}/>)}</div>
        </section>
     );
}
 
export default Time;