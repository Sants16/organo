import React from 'react';
import styles from './ListaSuspensa.module.css'
const ListaSuspensa = ({label, itens, obrigatorio, valor, aoAlterado}) => {
    return ( 
        <div className={styles.lista_suspensa}>
            <label>{label}</label>
            <select  onChange={e => aoAlterado(e.target.value)}required={obrigatorio} value={valor}>
                {itens.map((item) => <option key={item}>{item}</option>)}
            </select>
        </div>
     );
}
 
export default ListaSuspensa;