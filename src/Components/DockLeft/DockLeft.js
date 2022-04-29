import React, { useState, useEffect } from "react";
import CountryPicker from "./CountryPicker/CountryPicker";
import FilterCountry from "./FIlterCountry/FilterCountry";
import { countries } from "../Utils/Arrays & Objects/Countries";
import { fetchAllCurrentCountryData } from "../../api";

const DockLeft = ({
   choice,
   setChoice,
   setWorldwideToggle,
   setTitle,
   worldwideData,
   unavailableData,
   toggleUnavailableData,
}) => {
   const [allCountryData, setAllCountryData] = useState([]);
   const [foundCountries, setFoundCountries] = useState([]);

   useEffect(() => {
      fetchAllCurrentCountryData(setAllCountryData, setFoundCountries);
   }, []);

   return (
      <div
         style={{
            border: "2px solid white",
            borderRadius: "3px",
            backgroundColor: "#615756",
            padding: "10px",
            position: "relative",
            height: "100%",
            overflow: "hidden",
         }}
      >
         <FilterCountry
            foundCountries={foundCountries}
            setFoundCountries={setFoundCountries}
            allCountryData={allCountryData}
            setAllCountryData={setAllCountryData}
            countries={countries}
         />
         <div
            className="mb-1"
            style={{ padding: "0.5rem 1rem", color: "white" }}
         >
            <div
               style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
                  fontSize: "10px",
               }}
            >
               <div>Country</div>
               <div>Active Cases</div>
            </div>
         </div>
         <CountryPicker
            setChoice={setChoice}
            countries={countries}
            setTitle={setTitle}
            setWorldwideToggle={setWorldwideToggle}
            foundCountries={foundCountries}
            choice={choice}
            worldwideData={worldwideData}
            unavailableData={unavailableData}
            toggleUnavailableData={toggleUnavailableData}
         />
      </div>
   );
};

export default DockLeft;
