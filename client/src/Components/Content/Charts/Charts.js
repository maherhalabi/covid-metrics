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
   last90Days,
   sevenDayAverage,
   worldwideDailyCases,
   worldwideTest,
} from "../../Utils/Math/PercentageDifference";
import Bar_Chart_Template from "../../Utils/Bar_Chart_Template";
import { ButtonGroup, Dropdown } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

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
   useEffect(() => {
      if (!worldwideToggle) {
         fetchCountryHistoryData(setCountryHistory, choice);
         // fetchVaccineTotalByCountry(setCountryHistory, choice);
      } else {
         fetchHistoryData(setWorldwideHistory);
         // fetchVaccineWorldwideTotal(setVaccineWorldwide);
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

   // const dosesTimeline = Object.entries(vaccineWorldwideHistory).map(
   //    ([key, value]) => {
   //       return { date: key, Doses: value };
   //    }
   // );

   // const countryVaccineTimeline = Object.entries(vaccineCountryHistory).map(
   //    ([key, value]) => {
   //       return { date: key, Doses: value };
   //    }
   // );

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

   // const worldwideTotalVaccinated =
   //    Object.values(vaccineWorldwide)[
   //       Object.values(vaccineWorldwide).length - 1
   //    ];

   // const worldwideCasesAndDeaths = [...casesTimeline, ...deathsTimeline];

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

   console.log(last90Days(cases));

   const [buttonChoice, setButtonChoice] = useState("All Time");

   useEffect(() => {
      console.log(buttonChoice === "All Time");
   }, [buttonChoice]);
   const handleClick = (e) => {
      setButtonChoice(e.target.getAttribute("name"));
   };

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
         <ButtonGroup
            aria-label="Basic example"
            onClick={(e) => handleClick(e)}
         >
            <Button variant="secondary" name="All Time">
               All Time
            </Button>
            <Button variant="secondary" name="Last 90 Days">
               Last 90 Days
            </Button>
         </ButtonGroup>
         <div style={{ display: "flex", flexDirection: "row" }}>
            {buttonChoice === "All Time" ? (
               <Line_Chart_Template
                  worldwideToggle={worldwideToggle}
                  data={worldwideDailyCases(
                     worldwideHistory.cases,
                     countryHistory.timeline.cases,
                     sevenDayAvgArray,
                     worldwideToggle
                  )}
                  color={"#8884d8"}
               />
            ) : (
               <Bar_Chart_Template
                  worldwideToggle={worldwideToggle}
                  data={last90Days(cases)}
                  color={"#8884d8"}
               />
            )}
         </div>
         <div></div>
      </div>
   );
};
export default Chart;
