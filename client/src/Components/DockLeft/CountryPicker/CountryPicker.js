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
      <div style={{ display: "flex", height: "100%" }}>
         <ListGroup style={{ flex: 1, overflowY: "scroll" }}>
            <ListGroup.Item
               name="Worldwide"
               style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "space-between",
               }}
               onClick={(e) => handleClick(e)}
            >
               <div name="Worldwide">Worldwide</div>
               <div name="Worldwide">{worldwideData.cases}</div>
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
      </div>
   );
};

export default CountryPicker;
