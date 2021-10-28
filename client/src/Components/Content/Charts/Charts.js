import React, { useState, useEffect } from "react";
import {
   AreaChart,
   Area,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   ResponsiveContainer,
   LineChart,
   Legend,
   Line,
} from "recharts";
import { fetchHistoryData } from "../../../api";

const Chart = ({ worldwideData, countryData, choice, worldwideToggle }) => {
   const [history, setHistory] = useState({
      cases: {},
      deaths: {},
      recovered: {},
   });

   useEffect(() => {
      if (!worldwideToggle) {
      } else {
         fetchHistoryData(setHistory);
      }
   }, [choice]);

   const casesTimeline = Object.entries(history.cases).map(([key, value]) => {
      return { date: key, number: value };
   });

   const deathsTimeline = Object.entries(history.deaths).map(([key, value]) => {
      return { date: key, number: value };
   });

   console.log("TRANSFORMED", casesTimeline);

   return (
      <div>
         <h4>Cases</h4>
         <ResponsiveContainer width="100%" height={200}>
            <AreaChart
               width={500}
               height={400}
               data={casesTimeline}
               margin={{
                  top: 10,
                  right: 0,
                  left: 35,
                  bottom: 0,
               }}
            >
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="date" interval={76} />
               <YAxis />
               <Tooltip />
               <Area
                  type="monotone"
                  dataKey="number"
                  stroke="#8884d8"
                  fill="#8884d8"
               />
            </AreaChart>
         </ResponsiveContainer>
         <h4>Deaths</h4>
         <ResponsiveContainer width="100%" height={200}>
            <AreaChart
               width={500}
               height={400}
               data={deathsTimeline}
               margin={{
                  top: 10,
                  right: 0,
                  left: 35,
                  bottom: 0,
               }}
            >
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis dataKey="date" interval={76} />
               <YAxis />
               <Tooltip />
               <Area
                  type="monotone"
                  dataKey="number"
                  stroke="#8884d8"
                  fill="#8884d8"
               />
            </AreaChart>
         </ResponsiveContainer>
      </div>
   );
};
export default Chart;
