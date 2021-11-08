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
   fetchVaccineCountryHistory,
   fetchVaccineWorldwideHistory,
} from "../../../api";
import {
   concatObject,
   sevenDayAverage,
   worldwideDailyCases,
   worldwideTest,
} from "../../Utils/Math/PercentageDifference";

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
   const [vaccineCountryHistory, setVaccineCountryHistory] = useState({});
   const [vaccineWorldwideHistory, setVaccineWorldwideHistory] = useState({});

   useEffect(() => {
      if (!worldwideToggle) {
         fetchCountryHistoryData(setCountryHistory, choice);
         fetchVaccineTotalByCountry(setCountryHistory, choice);
         fetchVaccineCountryHistory(setVaccineCountryHistory, choice);
      } else {
         fetchHistoryData(setWorldwideHistory);
         fetchVaccineWorldwideTotal(setVaccineWorldwide);
         fetchVaccineWorldwideHistory(setVaccineWorldwideHistory);
      }
   }, [choice]);

   const casesTimeline = Object.entries(worldwideHistory.cases).map(
      ([key, value]) => {
         return { date: key, Cases: value };
      }
   );

   const deathsTimeline = Object.entries(worldwideHistory.deaths).map(
      ([key, value]) => {
         return { date: key, Deaths: value };
      }
   );

   const dosesTimeline = Object.entries(vaccineWorldwideHistory).map(
      ([key, value]) => {
         return { date: key, Doses: value };
      }
   );

   const countryVaccineTimeline = Object.entries(vaccineCountryHistory).map(
      ([key, value]) => {
         return { date: key, Doses: value };
      }
   );

   const countryCasesTimeline = Object.entries(
      countryHistory.timeline.cases
   ).map(([key, value]) => {
      return { date: key, Cases: value };
   });

   const countryDeathsTimeline = Object.entries(
      countryHistory.timeline.deaths
   ).map(([key, value]) => {
      return { date: key, Deaths: value };
   });

   const worldwideTotalVaccinated =
      Object.values(vaccineWorldwide)[
         Object.values(vaccineWorldwide).length - 1
      ];

   const worldwideCasesAndDeaths = [...casesTimeline, ...deathsTimeline];

   const countryCasesAndDeaths = [
      ...countryCasesTimeline,
      ...countryDeathsTimeline,
   ];

   const sevenDayAvgArray = [];
   const cases = worldwideDailyCases(
      worldwideHistory.cases,
      countryHistory.timeline.cases,
      sevenDayAvgArray,
      worldwideToggle
   );

   console.log(cases);

   const groupByDate = (array) =>
      array.reduce((results, item) => {
         const current = results.find((i) => i.date === item.date);
         if (current) {
            for (let property in item) {
               if (property !== "date") {
                  current[property] = item[property];
               }
            }
         } else {
            results.push({ ...item });
         }
         return results;
      }, []);

   return (
      <div
         style={{
            padding: "30px",
            border: "2px solid white",
            backgroundColor: "white",
         }}
      >
         <div style={{ display: "flex", flexDirection: "row" }}>
            <Line_Chart_Template
               worldwideToggle={worldwideToggle}
               data={worldwideDailyCases(
                  worldwideHistory.cases,
                  countryHistory.timeline.cases,
                  sevenDayAvgArray,
                  worldwideToggle
               )}
               title={"New Reported Cases"}
               color={"#8884d8"}
            />
         </div>
      </div>
   );
};
export default Chart;
