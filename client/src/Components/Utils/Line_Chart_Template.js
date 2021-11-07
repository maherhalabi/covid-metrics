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
   LineChart,
   Legend,
   Line,
} from "recharts";

const Line_Chart_Template = (props) => {
   return (
      <div
         style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
         }}
      >
         <h4>{props.title}</h4>

         <div style={{ width: "100%" }}>
            <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
               <LineChart
                  width={300}
                  height={300}
                  data={
                     props.worldwideToggle
                        ? props.worldwideTimeline
                        : props.countryTimeline
                  }
                  margin={{
                     top: 10,
                     right: 0,
                     left: 50,
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
                  <Legend />
                  <Line
                     type="monotone"
                     dataKey="Cases"
                     stroke="#8884d8"
                     activeDot={{ r: 8 }}
                  />
                  <Line
                     type="monotone"
                     dataKey="Deaths"
                     stroke="#FF0000"
                     activeDot={{ r: 8 }}
                  />
                  <Line
                     type="monotone"
                     dataKey="Doses"
                     stroke="#006400"
                     activeDot={{ r: 8 }}
                  />
               </LineChart>
            </ResponsiveContainer>
         </div>
      </div>
   );
};

export default Line_Chart_Template;
