import React, { useRef, useState } from "react";
import { Table } from "react-bootstrap";
import MapChart from "../Utils/MapChart";
import Cards from "./Cards/Cards";
import CapitaChart from "./Charts/CapitaChart";
import Charts from "./Charts/Charts";
import ReactTooltip from "react-tooltip";
const Content = ({
   choice,
   worldwideToggle,
   worldwideData,
   setWorldwideData,
   countryData,
   setCountryData,
}) => {
   const [content, setContent] = useState({
      countryName: "",
      countryCases: "",
      countryPerMillion: "",
   });

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

   const [randomID, setRandomID] = useState(String(Math.random()));

   console.log(content);
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
            <MapChart setTooltipContent={setContent} />
            <ReactTooltip data-for={randomID}>
               {/* {content.current.countryCases !== "" ? ( */}
               <div style={{ padding: "10px" }}>
                  <h4>{content.countryName}</h4>
                  <div
                     style={{
                        borderBottom: "1px solid white",
                        marginBottom: "10px",
                     }}
                  ></div>
                  <h6>Active Cases: {content.countryCases}</h6>
                  <h6>Per Hundred: {content.countryPerMillion}</h6>
               </div>
               {/* // ) : null} */}
            </ReactTooltip>
         </div>
      </div>
   );
};

export default Content;
