import React from 'react';
import styles from './LastUpdated.module.css';

const LastUpdated = ({data: {lastUpdate}}) => {
    return(
        <div className={styles.container}>
            <mark>Last Updated: {new Date(lastUpdate).toDateString()}</mark>
        </div>
    );
}

export default LastUpdated;