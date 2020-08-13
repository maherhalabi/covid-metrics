import React from 'react';
import { Card, CardContent, Typography, Grid} from '@material-ui/core';
import styles from '../../App.module.css';

const Cards = ({data: {confirmed, recovered, deaths, lastUpdate}}) => {
    if (!confirmed) {
        return 'Loading...'
    }
    return (
        <div className={styles.container}>
            <Grid container spacing={3} justify="center">
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Infected</Typography>
                        <Typography variant="h5">{confirmed.value}</Typography>
                        <Typography color="textSecondary">Date</Typography>
                        <Typography variant="body2"># of Infected</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Recovered</Typography>
                        <Typography variant="h5">{recovered.value}</Typography>
                        <Typography color="textSecondary">Date</Typography>
                        <Typography variant="body2"># of Recovered</Typography>
                    </CardContent>
                </Grid>
                <Grid item component={Card}>
                    <CardContent>
                        <Typography color="textSecondary" gutterBottom>Deaths</Typography>
                        <Typography variant="h5">{deaths.value}</Typography>
                        <Typography color="textSecondary">Date</Typography>
                        <Typography variant="body2"># of Deaths</Typography>
                    </CardContent>
                </Grid>
            </Grid>
        </div>
    );
}

export default Cards;