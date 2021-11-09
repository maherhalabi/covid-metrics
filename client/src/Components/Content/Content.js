import React, { useState } from "react";
import { Table } from "react-bootstrap";
import Cards from "./Cards/Cards";
import Charts from "./Charts/Charts";

const Content = ({
   choice,
   worldwideToggle,
   worldwideData,
   setWorldwideData,
   countryData,
   setCountryData,
}) => {
   const [worldwideHistory, setWorldwideHistory] = useState({
      cases: {},
      deaths: {},
      recovered: {},
   });

   const [countryHistory, setCountryHistory] = useState({
      timeline: {
         cases: {},
         deaths: {},
         recovered: {},
      },
   });

   return (
      <div
         style={{
            border: "2px solid white",
            padding: "30px",
            borderRadius: "3px",
            backgroundColor: "green",
            height: "100%",
         }}
      >
         <div>
            <Charts
               choice={choice}
               worldwideToggle={worldwideToggle}
               worldwideData={worldwideData}
               countryData={countryData}
               countryHistory={countryHistory}
               setCountryHistory={setCountryHistory}
               worldwideHistory={worldwideHistory}
               setWorldwideHistory={setWorldwideHistory}
            />
         </div>
         <div style={{ display: "flex", flexDirection: "row" }}>
            <Cards
               choice={choice}
               worldwideToggle={worldwideToggle}
               worldwideData={worldwideData}
               setWorldwideData={setWorldwideData}
               countryData={countryData}
               setCountryData={setCountryData}
               countryHistory={countryHistory}
               setCountryHistory={setCountryHistory}
               worldwideHistory={worldwideHistory}
               setWorldwideHistory={setWorldwideHistory}
            />
         </div>
         <div>
            
         </div>
      </div>
   );
};

export default Content;
