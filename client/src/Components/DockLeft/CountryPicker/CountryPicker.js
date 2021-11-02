import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";

const CountryPicker = ({
   setChoice,
   choice,
   setWorldwideToggle,
   setTitle,
   foundCountries,
}) => {
   const handleClick = (e) => {
      setChoice(e.target.innerText);
      setTitle(e.target.innerText);
      let isWorldwide = e.target.innerText == "Worldwide";
      if (isWorldwide) {
         setWorldwideToggle(true);
      } else {
         setWorldwideToggle(false);
      }
   };

   return (
      <ListGroup
         style={{
            maxHeight: "65vh",
            maxWidth: "300px",
            overflow: "scroll",
         }}
      >
         <ListGroup.Item name="Worldwide" onClick={(e) => handleClick(e)}>
            Worldwide
         </ListGroup.Item>
         {foundCountries.map((item) => {
            return (
               <div>
                  <ListGroup.Item
                     name={item.country}
                     onClick={(e) => handleClick(e)}
                  >
                     <div
                        style={{
                           display: "flex",
                           flexDirection: "row",
                           justifyContent: "space-between",
                        }}
                     >
                        <div>{item.country}</div>
                        <div>{item.cases}</div>
                     </div>
                  </ListGroup.Item>
               </div>
            );
         })}
      </ListGroup>
   );
};

export default CountryPicker;
