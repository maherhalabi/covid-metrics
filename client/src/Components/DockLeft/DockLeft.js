import React, { useState } from "react";
import CountryPicker from "./CountryPicker/CountryPicker";
import FilterCountry from "./FIlterCountry/FilterCountry";
import { countries } from "../Utils/Arrays & Objects/Countries";

const DockLeft = ({ setChoice, setWorldwideToggle, setTitle }) => {
   const [foundCountries, setFoundCountries] = useState(countries);
   return (
      <div>
         <FilterCountry
            foundCountries={foundCountries}
            setFoundCountries={setFoundCountries}
            countries={countries}
         />
         <CountryPicker
            setChoice={setChoice}
            countries={countries}
            setTitle={setTitle}
            setWorldwideToggle={setWorldwideToggle}
            foundCountries={foundCountries}
         />
      </div>
   );
};

export default DockLeft;
