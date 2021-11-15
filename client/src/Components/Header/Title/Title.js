import React from "react";

const Title = ({ title }) => {
   return (
      <div
         style={{
            display: "flex",
            alignItems: "center",

            color: "white",
         }}
      >
         <div style={{ fontSize: "30px", fontStyle: "bold" }}>
            Covid-19 Tracker
         </div>
         <div
            style={{
               fontSize: "60px",
               fontStyle: "bold",
               marginRight: "5px",
               color: "#52FFB8",
            }}
         >
            /
         </div>
         <div style={{ fontSize: "60px", fontStyle: "bold", color: "#52FFB8" }}>
            {title}
         </div>
      </div>
   );
};

export default Title;
