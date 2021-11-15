import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleQuantile } from "d3-scale";
import {
   ComposableMap,
   Geographies,
   Geography,
   Sphere,
   Graticule,
   ZoomableGroup,
} from "react-simple-maps";
import { countries } from "../Arrays & Objects/Countries";
import { fetchAllCountryData } from "../../../api";
import { ClimbingBoxLoader, PacmanLoader } from "react-spinners";
import { css } from "@emotion/react";
import "./MapChart.css";

const geoUrl =
   "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const MapChart = ({
   setTooltipContent,
   data,
   loadingHeatMap,
   position,
   setPosition,
}) => {
   const width = window.innerWidth;
   const height = window.innerHeight;

   const colorScale = scaleQuantile()
      .domain(data.map((d) => d.casesPerOneMillion / 10000))
      .range([
         "#ffedea",
         "#ffcec5",
         "#ffad9f",
         "#ff8a75",
         "#ff5533",
         "#e2492d",
         "#be3d26",
         "#9a311f",
         "#782618",
      ]);

   function handleMoveEnd(position) {
      setPosition(position);
   }

   const override = css`
      display: flex;
      justifycontent: center;
      margin: 0 auto;
      border-color: red;
   `;

   const aspect = width / height;
   const adjustedHeight = Math.ceil(width / aspect);

   return (
      <div className="grid">
         {loadingHeatMap ? (
            <ClimbingBoxLoader color="white" size={15} css={override} />
         ) : (
            <div>
               <ComposableMap
                  style={{
                     height: `inherit`,
                     width: `100%`,
                  }}
                  projectionConfig={{
                     rotate: [-10, 0, 0],
                     scale: 140,
                  }}
                  data-tip=""
                  stroke="#0D6EFD"
                  strokeWidth={0.5}
               >
                  <ZoomableGroup
                     zoom={position.zoom}
                     center={position.coordinates}
                     onMoveEnd={handleMoveEnd}
                  >
                     {data.length > 0 && (
                        <Geographies geography={geoUrl}>
                           {({ geographies }) =>
                              geographies.map((geo) => {
                                 const d = data.find(
                                    (s) =>
                                       s.countryInfo.iso3 ===
                                       geo.properties.ISO_A3
                                 );

                                 return (
                                    <Geography
                                       key={geo.rsmKey}
                                       geography={geo}
                                       onMouseEnter={() => {
                                          if (d !== undefined) {
                                             const { NAME, POP_EST } =
                                                geo.properties;
                                             let perMillion =
                                                d.casesPerOneMillion / 10000;
                                             setTooltipContent({
                                                countryName: NAME,
                                                countryCases: d.cases,
                                                countryPerMillion:
                                                   perMillion.toFixed(1),
                                             });
                                          }
                                       }}
                                       onMouseLeave={() => {
                                          setTooltipContent({
                                             countryName: "",
                                             countryCases: "",
                                             countryPerMillion: "",
                                          });
                                       }}
                                       style={{
                                          hover: {
                                             fill: "#52FFB8",
                                             outline: "black",
                                          },
                                       }}
                                       fill={
                                          d
                                             ? colorScale(
                                                  d.casesPerOneMillion / 10000
                                               )
                                             : "#F5F4F6"
                                       }
                                    />
                                 );
                              })
                           }
                        </Geographies>
                     )}
                  </ZoomableGroup>
               </ComposableMap>
            </div>
         )}
      </div>
   );
};

export default MapChart;
