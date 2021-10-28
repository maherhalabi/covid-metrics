import React from "react";
import CountryPicker from "./CountryPicker/CountryPicker";

const DockLeft = ({ setChoice, setWorldwideToggle, setTitle }) => {
   return (
      <div>
         <CountryPicker
            setChoice={setChoice}
            setTitle={setTitle}
            setWorldwideToggle={setWorldwideToggle}
         />
      </div>
   );
};

export default DockLeft;
