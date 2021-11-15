import React, { useRef, useState, useEffect } from "react";
import { ButtonGroup, Table, Button } from "react-bootstrap";
import MapChart from "../../Utils/MapChart/MapChart";
import ReactTooltip from "react-tooltip";
import { fetchAllCountryData } from "../../../api";

const HeatMap = ({ data, loadingHeatMap }) => {
   const [content, setContent] = useState({
      countryName: "",
      countryCases: "",
      countryPerMillion: "",
   });

   console.log(content);
   const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });
   const [randomID, setRandomID] = useState(String(Math.random()));

   function handleZoomIn() {
      if (position.zoom >= 4) return;
      setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
   }

   function handleZoomOut() {
      if (position.zoom <= 1) return;
      setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
   }

   function returnToNormal() {
      setPosition({ coordinates: [0, 0], zoom: 1 });
   }

   return (
      <div style={{ marginTop: "20px" }}>
         <ButtonGroup
            className="controls"
            style={{
               display: "flex",
               flexDirection: "row",
               justifyContent: "center",
            }}
         >
            <Button
               style={{ color: "black", background: "#52FFB8" }}
               onClick={handleZoomIn}
            >
               Zoom In
            </Button>
            <Button
               style={{ color: "black", background: "#52FFB8" }}
               onClick={handleZoomOut}
            >
               Zoom Out
            </Button>
            <Button
               style={{ color: "black", background: "#52FFB8" }}
               onClick={returnToNormal}
            >
               Return to Normal
            </Button>
         </ButtonGroup>
         <MapChart
            setTooltipContent={setContent}
            data={data}
            position={position}
            setPosition={setPosition}
         />
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
