import React, { useState, useEffect } from "react";
import moment from "moment";
import CountUp from "react-countup";
import { fetchCurrentWorldWideData } from "../../api/index";

const LastUpdated = () => {
   const [data, setData] = useState(0);

   useEffect(() => {
      fetchCurrentWorldWideData(setData);
   }, []);

   return (
      <div>
         <div>
            <mark>Last Updated: {moment(data.updated).format("LLLL")}</mark>
         </div>
      </div>
   );
};

export default LastUpdated;
