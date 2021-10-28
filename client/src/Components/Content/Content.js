import React from "react";
import Cards from "./Cards/Cards";
import Charts from "./Charts/Charts";

const Content = ({
   choice,
   worldwideToggle,
   worldwideData,
   setWorldwideData,
   countryData,
   setCountryData,
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
         />
         <Charts
            choice={choice}
            worldwideToggle={worldwideToggle}
            worldwideData={worldwideData}
            countryData={countryData}
         />
      </div>
   );
};

export default Content;
