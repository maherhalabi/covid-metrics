import React from "react";
import Cards from "./Cards/Cards";
import Charts from "./Charts/Charts";

const Content = ({ choice, worldwideToggle }) => {

   return (
      <div>
         <Cards choice={choice} worldwideToggle={worldwideToggle} />
         <Charts />
      </div>
   );
};

export default Content;
