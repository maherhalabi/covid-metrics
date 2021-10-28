import React from "react";
import CountryPicker from "./CountryPicker/CountryPicker";

const DockLeft = ({ setChoice, setWorldwideToggle }) => {
   return (
      <div>
         <CountryPicker
            setChoice={setChoice}
            setWorldwideToggle={setWorldwideToggle}
         />
      </div>
   );
};

export default DockLeft;
