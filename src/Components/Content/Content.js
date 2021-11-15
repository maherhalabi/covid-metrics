import React, { useRef, useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import MapChart from "../Utils/MapChart/MapChart";
import Cards from "../DockRight/Cards/Cards";
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
   worldwideHistory,
   setWorldwideHistory,
   countryHistory,
   setCountryHistory,
   dataList,
}) => {
   const [data, setData] = useState([]);
   const [loadingHeatMap, isLoadingHeatMap] = useState(true);

   useEffect(() => {
      if (data.length === 0) {
         fetchAllCountryData(setData);
         isLoadingHeatMap(false);
      } else {
         return;
      }
   }, []);

   return (
      <div style={{}}>
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
         <div>
            <HeatMap data={data} loadingHeatMap={loadingHeatMap} />
         </div>
      </div>
   );
};

export default Content;
