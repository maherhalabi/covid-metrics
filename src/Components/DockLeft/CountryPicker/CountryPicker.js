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
                  backgroundColor: choice === "Worldwide" ? "yellow" : "white",
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
                        style={{
                           backgroundColor:
                              choice === item.country ? "orange" : "white",
                        }}
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
         <div
            style={{
               position: "absolute",
               bottom: "0px",

               display: "block",

               width: "100%",
               height: " 150px",

               backgroundImage:
                  "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.9) 100%)",
               pointerEvents: "none",
            }}
         ></div>
      </div>
   );
};

export default CountryPicker;
