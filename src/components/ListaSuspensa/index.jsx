import React from 'react';
import styles from './ListaSuspensa.module.css'
const ListaSuspensa = ({label, itens, obrigatorio}) => {
    return ( 
        <div className={styles.lista_suspensa}>
            <label>{label}</label>
            <select required={obrigatorio}>
                {itens.map((item) => <option key={item}>{item}</option>)}
            </select>
        </div>
     );
}
 
export default ListaSuspensa;