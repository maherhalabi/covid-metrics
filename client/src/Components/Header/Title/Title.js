import React from "react";

const Title = ({ title }) => {
   return (
      <div
         className="text-left"
         style={{ display: "flex", alignItems: "center" }}
      >
         <div style={{ fontSize: "40px", fontStyle: "bold" }}>
            Covid-19 Tracker
         </div>
         <div
            style={{
               fontSize: "40px",
               fontStyle: "bold",
               marginRight: "5px",
               marginLeft: "5px",
               color: "green",
            }}
         >
            /
         </div>
         <div style={{ fontSize: "30px", fontStyle: "bold", color: "green" }}>
            {title}
         </div>
      </div>
   );
};

export default Title;
