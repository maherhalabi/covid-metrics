import React, { useState, useEffect } from "react";
import moment from "moment";
import CountUp from "react-countup";
import { fetchCurrentWorldWideData } from "../../../api/index";

const LastUpdated = () => {
   const [data, setData] = useState(0);

   useEffect(() => {
      fetchCurrentWorldWideData(setData);
   }, []);

   return (
      <div
         style={{
            textAlign: "center",
            fontSize: "25px",
            color: "black",
            backgroundColor: "#52FFB8",
            borderRadius: "3px",
            padding: "5px",
         }}
      >
         <div>Last Updated: {moment(data.updated).format("LLLL")}</div>
      </div>
   );
};

export default LastUpdated;
