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
import Line_Chart_Template from "../../Utils/Line_Chart_Template";
import {
   fetchHistoryData,
   fetchCountryHistoryData,
   fetchVaccineTotalByCountry,
   fetchCurrentWorldWideData,
   fetchVaccineWorldwideTotal,
} from "../../../api";

const Chart = ({
   worldwideData,
   countryData,
   choice,
   worldwideToggle,
   worldwideHistory,
   setWorldwideHistory,
   countryHistory,
   setCountryHistory,
}) => {
   const [vaccineWorldwide, setVaccineWorldwide] = useState({});

   useEffect(() => {
      if (!worldwideToggle) {
         fetchCountryHistoryData(setCountryHistory, choice);
         fetchVaccineTotalByCountry(setCountryHistory, choice);
      } else {
         fetchHistoryData(setWorldwideHistory);
         fetchVaccineWorldwideTotal(setVaccineWorldwide);
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

   const worldwideTotalVaccinated =
      Object.values(vaccineWorldwide)[
         Object.values(vaccineWorldwide).length - 1
      ];

   return (
      <div>
         <div style={{ display: "flex", flexDirection: "row" }}>
            <Line_Chart_Template
               worldwideToggle={worldwideToggle}
               worldwideTimeline={casesTimeline}
               countryTimeline={countryCasesTimeline}
               title={"Cases"}
               color={"#8884d8"}
            />
            <Line_Chart_Template
               worldwideToggle={worldwideToggle}
               worldwideTimeline={deathsTimeline}
               countryTimeline={countryDeathsTimeline}
               title={"Deaths"}
               color={"#FF7F7F"}
            />
         </div>
         {/* <div>
            <Donut_Chart_Template
               data={countryCasesTimeline}
               title="Vaccinated"
            />
         </div> */}
      </div>
   );
};
export default Chart;
