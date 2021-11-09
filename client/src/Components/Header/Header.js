import React from "react";

import Title from "./Title/Title";
import LastUpdated from "./LastUpdated/LastUpdated";

const Header = ({ title }) => {
   return (
      <div
         className="container align-center"
         style={{ height: "10vh", color: "white" }}
      >
         <div className="column" style={{ alignItems: "center" }}>
            <div>
               <Title title={title} />
            </div>
            <div>
               <LastUpdated />
            </div>
         </div>
      </div>
   );
};

export default Header;
