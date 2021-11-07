import React, { useState } from "react";
import CountUp from "react-countup";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import {
   ScatterChart,
   Scatter,
   XAxis,
   YAxis,
   ZAxis,
   Tooltip,
   Legend,
   ResponsiveContainer,
} from "recharts";
import {
   createPercentageArray,
   fourteenDayActivePercentage,
   fourteenDayDeathsPercentage,
   percentageArray,
} from "../Utils/Math/PercentageDifference";


const Card_Difference_Template = (props) => {
   return (
      <div>
         <Card style={{ width: "100%" }}>
            <ListGroup>
               <div>
                  <ListGroupItem>
                     <div> {props.title} From Yesterday</div>
                     <div> {props.OneDayDifference}</div>
                  </ListGroupItem>
                  <ListGroupItem>
                     <div> {props.title} From 14 Days</div>
                     <div> {props.FourteenDayDifference}</div>
                  </ListGroupItem>
               </div>
            </ListGroup>

            {/* <BarChart
               width={450}
               height={150}
               data={props.data}
               margin={{
                  top: 20,
                  right: 20,
                  left: 0,
                  bottom: 20,
               }}
            >
               <YAxis domain={["auto", "auto"]} dataKey="percentage" />
               <XAxis dataKey="date" hide="true">
                  <Label
                     value="7-Day Avg. Change"
                     offset={-10}
                     position="insideBottom"
                  />
               </XAxis>
               <CartesianGrid strokeDasharray="3 3" />
               <Tooltip content={<CustomTooltip />} />
               <defs>
                  <linearGradient id="splitColor" x1="0" y1="0" x2="0" y2="1">
                     <stop
                        offset={props.off}
                        stopColor="green"
                        stopOpacity={1}
                     />
                     <stop offset={props.off} stopColor="red" stopOpacity={1} />
                  </linearGradient>
               </defs>
               <Bar
                  type="monotone"
                  dataKey="percentage"
                  label="LAb"
                  fill="url(#splitColor)"
               />
            </BarChart> */}
         </Card>
      </div>
   );
};

export default Card_Difference_Template;

//https://codesandbox.io/s/react-gauge-chart-qo4s3?file=/components/GaugeChart.js:1331-1340
