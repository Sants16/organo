import React from 'react';
import styles from './CampoTexto.module.css'
const CampoTexto = ({text, name, placeholder, obrigatorio, valor, aoAlterado}) => {

    const aoDigitado = (e) => {
        aoAlterado(e.target.value)
    }

    return ( 
        <div className={styles.campo_texto}>
            <label htmlFor={name}>{text}</label>
            <input value={valor} onChange={aoDigitado} required={obrigatorio} type="text" name={name} id={name} placeholder={placeholder}/>
        </div>
     );
}
 
export default CampoTexto;