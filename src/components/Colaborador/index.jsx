import React from 'react';
import styles from './Colaborador.module.css'
const Colaborador = () => {
    return ( 
        <div className={styles.colaborador}>
            <div className={styles.cabecalho}>
                <img src="https://github.com/Sants16.png" alt="João Victor" />
            </div>
            <div className={styles.rodape}>
                <h4>João Victor</h4>
                <h5>sei la</h5>
            </div>
        </div>
     );
}
 
export default Colaborador;