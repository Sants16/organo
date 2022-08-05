import React from 'react';
import styles from './Banner.module.css'
import logo from '../../../public/img/banner.png'
const Banner = () => {
    return ( 
        <header className={styles.banner}>
            <img src={logo} alt="Banner principal da página do Organo" />
        </header>
     );
}
 
export default Banner;