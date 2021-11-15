import moment from "moment";
import React from "react";
import CountUp from "react-countup";
import {
   Area,
   CartesianGrid,
   ResponsiveContainer,
   Tooltip,
   XAxis,
   YAxis,
   LineChart,
   Legend,
   Line,
   ComposedChart,
} from "recharts";

const ComposeChart = (props) => {
   const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
         return (
            <div
               style={{
                  background: "#F9F6EE",
                  padding: "20px",
                  color: "black",
               }}
            >
               <div style={{ fontSize: "15px" }}>{`${moment(label).format(
                  "LL"
               )}`}</div>
               <div style={{ border: "1px solid black", opacity: 0.2 }} />
               <div>{`New Cases: ${payload[0].value}`}</div>
               <div>{`7-Day Average: ${payload[1].value}`}</div>
            </div>
         );
      }

      return null;
   };

   return (
      <div
         style={{
            display: "flex",
            flexDirection: "column",
            width: "100%",
         }}
      >
         <h4>{props.title}</h4>

         <div style={{ height: "20vh" }}>
            <ResponsiveContainer width="100%" height="100%">
               <ComposedChart
                  data={props.data}
                  margin={{
                     top: 10,
                     right: 0,
                     left: 40,
                     bottom: 0,
                  }}
               >
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis
                     dataKey="date"
                     dy={10}
                     minTickGap={6}
                     fontSizeAdjust={0.45}
                     stroke="white"
                  />
                  <YAxis axisLine={false} stroke="white" />
                  <Tooltip content={<CustomTooltip />} />
                  <Area
                     type="monotone"
                     dataKey="cases"
                     stroke="#F95738"
                     fill="#F95738"
                     name="Daily Cases"
                  />
                  <Line
                     type="monotone"
                     dataKey="sevenDayAvg"
                     stroke="#82ca9d"
                     strokeWidth={4}
                     strokeOpacity={0.9}
                     dot={false}
                     name="7-Day Average"
                  />
                  <Legend
                     verticalAlign="top"
                     align="center"
                     wrapperStyle={{ top: -1 }}
                  />
               </ComposedChart>
            </ResponsiveContainer>
         </div>
      </div>
   );
};

export default ComposeChart;
