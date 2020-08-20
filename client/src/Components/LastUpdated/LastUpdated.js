import React from 'react';
import moment from 'moment';
import styles from './LastUpdated.module.css';

const LastUpdated = ({data: {lastUpdate}}) => {
    let lastUpdated = moment(lastUpdate).format('LLLL');
    return(
        <div className={styles.container}>
            <mark>Last Updated: {lastUpdated}</mark>
        </div>
    );
}

export default LastUpdated;