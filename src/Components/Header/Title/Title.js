import React from "react";

const Title = ({ title }) => {
   return (
      <div className="text-left">
         <div style={{ fontSize: "30px", fontStyle: "bold" }}>
            Covid-19 Tracker
         </div>
         <div>{title}</div>
      </div>
   );
};

export default Title;
