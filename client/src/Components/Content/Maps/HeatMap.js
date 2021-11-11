import React, { useRef, useState, useEffect } from "react";
import { Table } from "react-bootstrap";
import MapChart from "../../Utils/MapChart";
import ReactTooltip from "react-tooltip";
import { fetchAllCountryData } from "../../../api";
const HeatMap = ({ data }) => {
   const [content, setContent] = useState({
      countryName: "",
      countryCases: "",
      countryPerMillion: "",
   });

   const [randomID, setRandomID] = useState(String(Math.random()));

   return (
      <div style={{ background: "black" }}>
         <MapChart setTooltipContent={setContent} data={data} />
         <ReactTooltip data-for={randomID}>
            {content.countryCases !== "" ? (
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
            ) : null}
         </ReactTooltip>
      </div>
   );
};

export default HeatMap;
