import React from 'react';
import styles from './CampoTexto.module.css'
const CampoTexto = ({text, name, placeholder, obrigatorio}) => {
    return ( 
        <div className={styles.campo_texto}>
            <label htmlFor={name}>{text}</label>
            <input  required={obrigatorio} type="text" name={name} id={name} placeholder={placeholder}/>
        </div>
     );
}
 
export default CampoTexto;