import React from "react";
import {
   BarChart,
   Bar,
   Brush,
   ReferenceLine,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   Legend,
   ResponsiveContainer,
} from "recharts";

export const BrushBarChart = (props) => {
   const CustomTooltip = ({ active, payload, label }) => {
      if (active && payload && payload.length) {
         return (
            <div
               style={{
                  background: "rgb(136, 66, 213, 0.7)",
                  padding: "20px",
                  color: "white",
               }}
            >
               <p className="label">{`Date: ${label}`}</p>
               <p className="intro">{`Deaths Count Avg.: ${
                  payload[0].value > 0 ? "+" : "-"
               }${payload[0].value}%`}</p>
               <p className="intro">{`New Cases Avg.: ${
                  payload[1].value > 0 ? "+" : "-"
               }${payload[1].value}%`}</p>
            </div>
         );
      }

      return null;
   };

   console.log(props.data);

   return (
      <ResponsiveContainer width="100%" aspect={4.0 / 3.0}>
         <BarChart
            width={800}
            height={400}
            data={props.data}
            margin={{
               top: 5,
               right: 30,
               left: 20,
               bottom: 5,
            }}
         >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" tick={{ fill: "white" }} />
            <YAxis
               color="#363635"
               tick={{ fill: "white" }}
               ifOverflow="extendDomain"
               type="number"
               domain={["dataMin", "dataMax"]}
               allowDataOverflow={true}
            />
            <Tooltip content={<CustomTooltip />} />
            <Legend verticalAlign="top" wrapperStyle={{ lineHeight: "40px" }} />
            <Brush
               dataKey="date"
               height={20}
               stroke="#white"
               style={{ color: "white" }}
            />
            <Bar dataKey="Deaths" fill="#FF3E41" />
            <Bar dataKey="Cases" fill="#9EC5AB" />
         </BarChart>
      </ResponsiveContainer>
   );
};
