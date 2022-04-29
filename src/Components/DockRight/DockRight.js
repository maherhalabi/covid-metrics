import React, { useRef, useState, useEffect } from "react";
import Cards from "./Cards/Cards";
const DockRight = ({
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
   vaccinesCountry,
   setVaccinesCountry,
   vaccinesWorldwide,
   setVaccinesWorldwide,
   dataList,
   unavailableData,
   toggleUnavailableData,
}) => {
   return (
      <div>
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
            vaccinesCountry={vaccinesCountry}
            setVaccinesCountry={setVaccinesCountry}
            vaccinesWorldwide={vaccinesWorldwide}
            setVaccinesWorldwide={setVaccinesWorldwide}
            dataList={dataList}
            unavailableData={unavailableData}
            toggleUnavailableData={toggleUnavailableData}
         />
      </div>
   );
};

export default DockRight;
