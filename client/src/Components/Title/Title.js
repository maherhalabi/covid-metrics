import React from "react";
import {Typography, Grid}  from '@material-ui/core';
import coronaImg from '../../images/logo.png';

import styles from './Title.module.css'
const Title = () => {

    return (
        <Grid container justify='center' className={styles.container}>
            <img className={styles.title} src={coronaImg}></img>
        </Grid>
    );
}

export default Title;