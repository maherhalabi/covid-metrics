import React from 'react';
import styles from './Footer.module.css';

const Footer = () => {
    return (
    <div className={styles.container}>
        <div className={styles.footerContent}>
            Powered by <a href="https://github.com/jerairrest/react-chartjs-2">React-Charts-JS2</a>
        </div>
        <div>
            |
        </div>
        <div className={styles.footerContent}>
            <a href="https://github.com/mohur"><img  className={styles.logo}src="https://image.flaticon.com/icons/png/512/25/25231.png"></img></a>
        </div>
    </div>
    );
}

export default Footer;