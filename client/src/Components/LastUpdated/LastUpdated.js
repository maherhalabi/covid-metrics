import React from "react";
import moment from "moment";
import CountUp from "react-countup";
import { Typography } from "@material-ui/core";
import styles from "./LastUpdated.module.css";

const LastUpdated = () => {
   // let lastUpdated = moment(lastUpdate).format('LLLL');
   // if (!confirmed) { return 'Loading...'}
   // let activeCases = confirmed.value - recovered.value;
   return (
      <div>
         {/* <div className={styles.container}>
                <mark>Last Updated: {lastUpdated}</mark>
            </div>
            <div className={styles.container}>
                <Typography variant="h4">
                    Active Cases: <CountUp className={styles.danger} start={0} end={activeCases} duration={3} separator=","/>
                </Typography>
            </div> */}
      </div>
   );
};

export default LastUpdated;
