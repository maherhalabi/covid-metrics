import React, { useEffect, useState } from "react";
import Card_Template from "../../Utils/Card_Template";
import Card_Difference_Template from "../../Utils/Card_Difference_Template";
import {
   Col,
   ListGroup,
   Row,
   Table,
   Card,
   ListGroupItem,
} from "react-bootstrap";
import { BrushBarChart } from "../../Utils/BrushBarChart";
import { ResponsiveContainer } from "recharts";
import HeatMap from "react-heatmap-grid";
import {
   fetchCurrentWorldWideData,
   fetchCurrentCountryData,
   fetchCountryHistoryData,
} from "../../../api";
import { countries } from "../../Utils/Arrays & Objects/Countries";
import CountryPicker from "../../DockLeft/CountryPicker/CountryPicker";
import {
   findSumOf1ActiveDay,
   findSumOf14ActiveDays,
   findSumOf14DeathDays,
   findSumOf1DeathDay,
   findSumOf14RecoveredDays,
   findSumOf1RecoveredDay,
   findFirstCase,
} from "../../Utils/Math/SumDifference";
import {
   createPercentageArray,
   fourteenDayActivePercentage,
   fourteenDayDeathsPercentage,
} from "../../Utils/Math/PercentageDifference";
import moment from "moment";

const Cards = ({
   choice,
   worldwideToggle,
   worldwideData,
   setWorldwideData,
   countryData,
   setCountryData,
   worldwideHistory,
   countryHistory,
}) => {
   useEffect(() => {
      if (!worldwideToggle) {
         fetchCurrentCountryData(setCountryData, choice);
      } else {
         fetchCurrentWorldWideData(setWorldwideData);
      }

      // window.addEventListener("resize", updateDimensions);
      // return () => window.removeEventListener("resize", updateDimensions);
   }, [choice]);

   const percentageOfDeathsArray = [];
   const percentageOfActiveArray = [];

   const dataList = [
      {
         title: "Active Cases",
         worldwideNumber: worldwideData.active,
         worldWidePerMillion: worldwideData.activePerOneMillion,
         countryNumber: countryData.active,
         countryPerMillion: countryData.activePerOneMillion,
         sumOf1ActiveDay: findSumOf1ActiveDay(
            worldwideToggle,
            worldwideHistory,
            countryHistory
         ),
         sumof14ActiveDays: findSumOf14ActiveDays(
            worldwideToggle,
            worldwideHistory,
            countryHistory
         ),
         createPercentageArray: createPercentageArray(
            worldwideHistory.cases,
            countryHistory.timeline.cases,
            worldwideToggle,
            percentageOfActiveArray,
            "Cases"
         ),
      },
      {
         title: "Recovered",
         worldwideNumber: worldwideData.recovered,
         worldWidePerMillion: worldwideData.recoveredPerOneMillion,
         countryNumber: countryData.recovered,
         countryPerMillion: countryData.recoveredPerOneMillion,
         sumOf1ActiveDay: findSumOf1RecoveredDay(
            worldwideToggle,
            worldwideHistory,
            countryHistory
         ),
         sumof14ActiveDays: findSumOf14RecoveredDays(
            worldwideToggle,
            worldwideHistory,
            countryHistory
         ),
      },
      {
         title: "Deaths",
         worldwideNumber: worldwideData.deaths,
         worldWidePerMillion: worldwideData.deathsPerOneMillion,
         countryNumber: countryData.deaths,
         countryPerMillion: countryData.deathsPerOneMillion,
         sumOf1ActiveDay: findSumOf1DeathDay(
            worldwideToggle,
            worldwideHistory,
            countryHistory
         ),
         sumof14ActiveDays: findSumOf14DeathDays(
            worldwideToggle,
            worldwideHistory,
            countryHistory
         ),
         createPercentageArray: createPercentageArray(
            worldwideHistory.deaths,
            countryHistory.timeline.deaths,
            worldwideToggle,
            percentageOfDeathsArray,
            "Deaths"
         ),
      },
   ];

   const combineCasesAndDeathsArray = [
      ...percentageOfActiveArray,
      ...percentageOfDeathsArray,
   ];

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
            width: "100%",
            padding: "30px",
            backgroundColor: "grey",
            border: "2px solid white",
            borderRadius: "3px",
         }}
      >
         <h3>Cases Overview</h3>
         <div
            style={{
               display: "flex",
               justifyContent: "space-between",
               flexWrap: "wrap",
            }}
         >
            {dataList.map((dataItem) => {
               const {
                  title,
                  worldwideNumber,
                  worldWidePerMillion,
                  countryNumber,
                  sumO1ActiveDay,
                  sumO14ActiveDays,
               } = dataItem;
               return (
                  <div
                     style={{
                        flex: 1,
                     }}
                  >
                     <Card_Template
                        number={
                           worldwideToggle ? worldwideNumber : countryNumber
                        }
                        title={title}
                     />
                  </div>
               );
            })}
            <div style={{ flex: 1 }}>
               <Card_Template
                  number={`${findFirstCase(
                     worldwideToggle,
                     worldwideHistory,
                     countryHistory
                  )} Days Ago`}
                  title="First Case"
               />
            </div>
         </div>
         <div style={{ display: "flex", width: "100%", padding: "30px" }}>
            <div style={{ paddingLeft: "10px", flex: 1 }}>
               <Card_Difference_Template
                  OneDayDifference={dataList[0].sumOf1ActiveDay}
                  FourteenDayDifference={dataList[0].sumof14ActiveDays}
                  title={dataList[0].title}
                  worldwideHistory={worldwideHistory}
                  countryHistory={countryHistory}
                  worldwideToggle={worldwideToggle}
                  percentageOfDeathsArray={percentageOfDeathsArray}
               />
            </div>
            <div style={{ paddingLeft: "10px", flex: 1 }}>
               <Card_Difference_Template
                  OneDayDifference={dataList[2].sumOf1ActiveDay}
                  FourteenDayDifference={dataList[2].sumof14ActiveDays}
                  title={dataList[2].title}
               />
            </div>
         </div>
      </div>
   );
};

export default Cards;
