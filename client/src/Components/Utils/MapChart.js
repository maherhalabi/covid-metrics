import React, { useEffect, useState } from "react";
import { csv } from "d3-fetch";
import { scaleLinear } from "d3-scale";
import {
   ComposableMap,
   Geographies,
   Geography,
   Sphere,
   Graticule,
} from "react-simple-maps";
import { countries } from "./Arrays & Objects/Countries";
import { fetchAllCountryData } from "../../api";

const geoUrl =
   "https://raw.githubusercontent.com/zcreativelabs/react-simple-maps/master/topojson-maps/world-110m.json";

const colorScale = scaleLinear()
   .domain([0, 12.5])
   .range(["#ffedea", "#ff5233"]);

const MapChart = ({ setTooltipContent }) => {
   const [data, setData] = useState([]);

   useEffect(() => {
      fetchAllCountryData(setData);
   }, []);

   console.log(data);

   return (
      <ComposableMap
         projectionConfig={{
            rotate: [-10, 0, 0],
            scale: 147,
         }}
         data-tip=""
      >
         <Sphere stroke="#E4E5E6" strokeWidth={0.5} />
         <Graticule stroke="#E4E5E6" strokeWidth={0.5} />
         {data.length > 0 && (
            <Geographies geography={geoUrl}>
               {({ geographies }) =>
                  geographies.map((geo) => {
                     const d = data.find(
                        (s) => s.countryInfo.iso3 === geo.properties.ISO_A3
                     );

                     return (
                        <Geography
                           key={geo.rsmKey}
                           geography={geo}
                           onMouseEnter={() => {
                              if (d !== undefined) {
                                 const { NAME, POP_EST } = geo.properties;
                                 let perMillion = d.casesPerOneMillion / 10000;
                                 setTooltipContent({
                                    countryName: NAME,
                                    countryCases: d.cases,
                                    countryPerMillion: perMillion.toFixed(1),
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
                                 fill: "blue",
                                 outline: "none",
                              },
                              pressed: {
                                 fill: "#E42",
                                 outline: "none",
                              },
                           }}
                           fill={
                              d
                                 ? colorScale(d.casesPerOneMillion / 10000)
                                 : "#F5F4F6"
                           }
                        />
                     );
                  })
               }
            </Geographies>
         )}
      </ComposableMap>
   );
};

export default MapChart;
