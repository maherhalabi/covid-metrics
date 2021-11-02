import React from "react";
import CountUp from "react-countup";
import {
   PieChart,
   Pie,
   Legend,
   Tooltip,
   Cell,
   Label,
   ResponsiveContainer,
} from "recharts";

const Donut_Chart_Template = (props) => {
   const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

   const data01 = [
      { name: "Group A", value: 400 },
      { name: "Group B", value: 300 },
      { name: "Group C", value: 300 },
      { name: "Group D", value: 200 },
   ];
   return (
      <div
         style={{
            display: "flex",
            flexDirection: "column",
            width: "50%",
         }}
      >
         <ResponsiveContainer width="100%" height={400}>
            <PieChart width={800} height={400}>
               <Pie
                  dataKey="value"
                  data={data01}
                  innerRadius={60}
                  outerRadius={100}
                  fill="#82ca9d"
               >
                  <Label
                     value={props.title}
                     position="center"
                     fontSize="15px"
                  />
                  {data01.map((entry, index) => (
                     <Cell fill={COLORS[index % COLORS.length]} />
                  ))}
               </Pie>
               <Tooltip />
            </PieChart>
         </ResponsiveContainer>
      </div>
   );
};

export default Donut_Chart_Template;
