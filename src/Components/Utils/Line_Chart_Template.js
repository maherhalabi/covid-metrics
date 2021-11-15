import React from "react";
import CountUp from "react-countup";
import {
   Area,
   AreaChart,
   CartesianGrid,
   ResponsiveContainer,
   Tooltip,
   XAxis,
   YAxis,
} from "recharts";

const Line_Chart_Template = (props) => {
   return (
      <div
         style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
         }}
      >
         <h4>{props.title}</h4>
         <ResponsiveContainer width="100%" height={400}>
            <AreaChart
               width={500}
               height={400}
               data={
                  props.worldwideToggle
                     ? props.worldwideTimeline
                     : props.countryTimeline
               }
               margin={{
                  top: 10,
                  right: 0,
                  left: 35,
                  bottom: 0,
               }}
            >
               <CartesianGrid strokeDasharray="3 3" />
               <XAxis
                  dataKey="date"
                  dy={10}
                  minTickGap={6}
                  fontSizeAdjust={0.45}
               />
               <YAxis dx={-5} />
               <Tooltip />
               <Area
                  type="monotone"
                  dataKey="number"
                  stroke="#8884d8"
                  fill={props.color}
               />
            </AreaChart>
         </ResponsiveContainer>
      </div>
   );
};

export default Line_Chart_Template;
