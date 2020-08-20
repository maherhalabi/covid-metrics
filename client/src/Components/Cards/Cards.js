import React from 'react';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';
import { Card, CardContent, Typography, Grid, createMuiTheme, MuiThemeProvider, responsiveFontSizes, TablePagination } from '@material-ui/core';

const Cards = ({data: {confirmed, recovered, deaths}, pastData: {pastConfirmed}}) => {
    
    if (!confirmed && !pastConfirmed) {
        return 'Loading...';
    }

    const THEME = createMuiTheme({
        typography: {
            "fontFamily": `'Source Serif Pro', serif`,
            fontSize: 20,
        }
    });
    
    console.log(pastConfirmed);
    const newCases = (type) => {
        let total = 0;
        if (type === confirmed) {
            total = confirmed.value - pastConfirmed;
            console.log(total)
            return (
                (pastConfirmed) ? (
                <Typography variant="h6" > 
                    <CountUp start={0} end={total} duration={3} separator=","/>
                </Typography>
                ) : null
            );
        }
        return total;
    }

    return (
        <div className={styles.container}>
            <MuiThemeProvider theme={THEME}>
                <Grid container spacing={6} justify="center">
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.infected)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom >Infected</Typography>
                            <Typography variant="h5">
                                <CountUp start={0} end={confirmed.value} duration={3} separator=","/>
                            </Typography>
                            {newCases(confirmed)}
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                            <Typography variant="h5">
                                <CountUp start={0} end={recovered.value} duration={3} separator=","/>
                            </Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                            <Typography variant="h5">
                                <CountUp start={0} end={deaths.value} duration={3} separator=","/>
                            </Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </MuiThemeProvider>
        </div>
    );
}

export default Cards;