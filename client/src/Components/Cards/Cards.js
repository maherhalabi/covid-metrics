import React from 'react';
import { Card, CardContent, Typography, Grid, createMuiTheme, MuiThemeProvider } from '@material-ui/core';
import CountUp from 'react-countup';
import cx from 'classnames';
import styles from './Cards.module.css';

const Cards = ({data: {confirmed, recovered, deaths}}) => {
    if (!confirmed) {
        return 'Loading...'
    }

    const THEME = createMuiTheme({
        typography: {
            "fontFamily": `'Source Serif Pro', serif`,
            fontSize: 20,
        }
    })

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
                            <Typography variant="body2"># of Infected</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.recovered)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                            <Typography variant="h5">
                                <CountUp start={0} end={recovered.value} duration={3} separator=","/>
                            </Typography>
                            <Typography variant="body2"># of Recovered</Typography>
                        </CardContent>
                    </Grid>
                    <Grid item component={Card} xs={12} md={3} className={cx(styles.card, styles.deaths)}>
                        <CardContent>
                            <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                            <Typography variant="h5">
                                <CountUp start={0} end={deaths.value} duration={3} separator=","/>
                            </Typography>
                            <Typography variant="body2"># of Deaths</Typography>
                        </CardContent>
                    </Grid>
                </Grid>
            </MuiThemeProvider>
        </div>
    );
}

export default Cards;