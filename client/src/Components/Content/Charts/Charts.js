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
import { fetchHistoryData, fetchCountryHistoryData } from "../../../api";

const Chart = ({ worldwideData, countryData, choice, worldwideToggle }) => {
   const [worldwideHistory, setWorldwideHistory] = useState({
      cases: {},
      deaths: {},
      recovered: {},
   });

   const [countryHistory, setCountryHistory] = useState({
      timeline: {
         cases: {},
         deaths: {},
         recovered: {},
      },
   });

   useEffect(() => {
      if (!worldwideToggle) {
         fetchCountryHistoryData(setCountryHistory, choice);
      } else {
         fetchHistoryData(setWorldwideHistory);
      }
   }, [choice]);

   const casesTimeline = Object.entries(worldwideHistory.cases).map(
      ([key, value]) => {
         return { date: key, number: value };
      }
   );

   const deathsTimeline = Object.entries(worldwideHistory.deaths).map(
      ([key, value]) => {
         return { date: key, number: value };
      }
   );

   const countryCasesTimeline = Object.entries(
      countryHistory.timeline.cases
   ).map(([key, value]) => {
      return { date: key, number: value };
   });

   const countryDeathsTimeline = Object.entries(
      countryHistory.timeline.deaths
   ).map(([key, value]) => {
      return { date: key, number: value };
   });

   return (
      <div>
         <h4>Cases</h4>
         <ResponsiveContainer width="100%" height={200}>
            <AreaChart
               width={500}
               height={400}
               data={worldwideToggle ? casesTimeline : countryCasesTimeline}
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
               data={worldwideToggle ? deathsTimeline : countryDeathsTimeline}
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
