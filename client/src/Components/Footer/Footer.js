import React from "react";
import styles from "./Footer.module.css";
import { VscGithubAlt } from "react-icons/vsc";

const Footer = () => {
   return (
      <div className={styles.container}>
         <div className={styles.footerContent}>
            Powered by{" "}
            <a
               className={styles.text_color}
               href="https://www.react-simple-maps.io/"
            >
               React Simple Maps
            </a>{" "}
            &{" "}
            <a className={styles.text_color} href="https://recharts.org/en-US/">
               Recharts
            </a>
         </div>
         <div className={styles.text_color}>|</div>
         <div className={styles.footerContent}>
            API:{" "}
            <a className={styles.text_color} href="https://disease.sh/">
               disease.sh
            </a>
         </div>
         <div className={styles.text_color}>|</div>
         <div className={styles.footerContent}>
            <a
               className={styles.text_color}
               href="https://www.who.int/emergencies/diseases/novel-coronavirus-2019/donate"
            >
               COVID-19 Donations
            </a>
         </div>
         <div className={styles.text_color}>|</div>
         <div className={styles.text_color}>|</div>
         <div className={styles.footerContent}>
            <a className={styles.text_color} href="https://github.com/3g2">
               <VscGithubAlt className={styles.logo} />
            </a>
         </div>
      </div>
   );
};

export default Footer;
