import React, { useEffect, useState } from "react";
import { ListGroup } from "react-bootstrap";

const CountryPicker = ({
   setChoice,
   choice,
   setWorldwideToggle,
   setTitle,
   foundCountries,
   worldwideData,
}) => {
   const handleClick = (e) => {
      setChoice(e.target.getAttribute("name"));
      setTitle(e.target.getAttribute("name"));
      let isWorldwide = e.target.getAttribute("name") == "Worldwide";
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
         <ListGroup.Item
            name="Worldwide"
            style={{
               display: "flex",
               flexDirection: "row",
               justifyContent: "space-between",
            }}
            onClick={(e) => handleClick(e)}
         >
            <div>Worldwide</div>
            <div>{worldwideData.cases}</div>
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
                        name={item.country}
                     >
                        <div name={item.country}>{item.country}</div>
                        <div name={item.country}>{item.cases}</div>
                     </div>
                  </ListGroup.Item>
               </div>
            );
         })}
      </ListGroup>
   );
};

export default CountryPicker;
