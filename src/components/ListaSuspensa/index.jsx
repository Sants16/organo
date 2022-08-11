import React from 'react';
import styles from './ListaSuspensa.module.css'
const ListaSuspensa = ({label, itens}) => {
    return ( 
        <div className={styles.lista_suspensa}>
            <label>{label}</label>
            <select>
                {itens.map((item) => <option key={item}>{item}</option>)}
            </select>
        </div>
     );
}
 
export default ListaSuspensa;