import React, { useEffect, useState } from "react";
import Card_Template from "../Utils/Card_Template";
import { fetchCurrentWorldWideData } from "../../api";

const Cards = () => {
   const [data, setData] = useState(0);

   useEffect(() => {
      fetchCurrentWorldWideData(setData);
   }, []);

   return (
      <div>
         <div>Worldwide</div>
         <div>
            <div>
               <Card_Template title={"Active Cases"} number={data.active} />
            </div>
            <div>
               <Card_Template title={"Total Cases"} number={data.cases} />
            </div>
            <div>
               <Card_Template title={"Recovered"} number={data.recovered} />
            </div>
            <div>
               <Card_Template title={"Deaths"} number={data.deaths} />
            </div>
         </div>
      </div>
   );
};

export default Cards;
