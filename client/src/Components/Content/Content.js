import React, { useRef, useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import MapChart from "../Utils/MapChart";
import Cards from "./Cards/Cards";
import CapitaChart from "./Charts/CapitaChart";
import Charts from "./Charts/Charts";
import ReactTooltip from "react-tooltip";
import { fetchAllCountryData } from "../../api";
import HeatMap from "./Maps/HeatMap";
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

   const [data, setData] = useState([]);

   useEffect(() => {
      if (data.length === 0) {
         fetchAllCountryData(setData);
      } else {
         return;
      }
   }, []);

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
            <CapitaChart
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
         <div style={{ background: "black" }}>
            <HeatMap data={data} />
         </div>
      </div>
   );
};

export default Content;
