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
}) => {
   const [allCountryData, setAllCountryData] = useState([]);
   const [foundCountries, setFoundCountries] = useState([]);

   useEffect(() => {
      fetchAllCurrentCountryData(setAllCountryData, setFoundCountries);
   }, []);

   return (
      <div style={{ maxHeight: "70vh" }}>
         <FilterCountry
            foundCountries={foundCountries}
            setFoundCountries={setFoundCountries}
            allCountryData={allCountryData}
            setAllCountryData={setAllCountryData}
            countries={countries}
         />
         <CountryPicker
            setChoice={setChoice}
            countries={countries}
            setTitle={setTitle}
            setWorldwideToggle={setWorldwideToggle}
            foundCountries={foundCountries}
            choice={choice}
            worldwideData={worldwideData}
         />
      </div>
   );
};

export default DockLeft;
