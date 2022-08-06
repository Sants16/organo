import React from 'react';
import styles from './CampoTexto.module.css'
const CampoTexto = ({text, name, placeholder}) => {
    return ( 
        <div className={styles.campo_texto}>
            <label htmlFor={name}>{text}</label>
            <input type="text" name={name} id={name} placeholder={placeholder}/>
        </div>
     );
}
 
export default CampoTexto;