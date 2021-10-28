import React from "react";
import { ListGroup } from "react-bootstrap";
import { countries } from "../../Utils/Arrays & Objects/Countries";

const CountryPicker = ({ setChoice, setWorldwideToggle }) => {
   const handleClick = (e) => {
      setChoice(e.target.innerText);
      let isWorldwide = e.target.innerText == "Worldwide";
      console.log("CHECK WORLD", isWorldwide);
      if (isWorldwide) {
         setWorldwideToggle(true);
      } else {
         setWorldwideToggle(false);
      }
   };

   return (
      <ListGroup
         style={{
            maxHeight: "70vh",
            maxWidth: "300px",
            overflow: "scroll",
         }}
      >
         <ListGroup.Item name="Worldwide" onClick={(e) => handleClick(e)}>
            Worldwide
         </ListGroup.Item>
         {countries.map((item) => {
            return (
               <ListGroup.Item
                  name={item.country}
                  onClick={(e) => handleClick(e)}
               >
                  {item.country}
               </ListGroup.Item>
            );
         })}
      </ListGroup>
   );
};

export default CountryPicker;
