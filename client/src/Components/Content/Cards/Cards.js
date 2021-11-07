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
            percentageOfActiveArray
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
            percentageOfDeathsArray
         ),
      },
   ];

   const xLabels = (array) => {
      return array.map((item) => {
         return item.date;
      });
   };

   const xLabelsVisibility = new Array(7)
      .fill(0)
      .map((_, i) => (i % 2 === 0 ? true : false));

   const yLabels = (value) => {
      return [value];
   };

   const avgDeathsData = (array) => {
      const data = new Array(yLabels.length).fill(0).map(() =>
         array.map((item) => {
            return item.percentage;
         })
      );

      return data;
   };

   return (
      <div style={{ width: "100%" }}>
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
                        paddingLeft: "10px",
                        paddingRight: "10px",
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
            <div style={{ flex: 1, paddingLeft: "10px", paddingRight: "10px" }}>
               <Card_Template
                  number={findFirstCase(
                     worldwideToggle,
                     worldwideHistory,
                     countryHistory
                  )}
                  title="First Case"
               />
            </div>
         </div>
         <div style={{ display: "flex", width: "100%" }}>
            <div style={{ paddingLeft: "10px", flex: 1 }}>
               <Card_Difference_Template
                  OneDayDifference={dataList[0].sumOf1ActiveDay}
                  FourteenDayDifference={dataList[0].sumof14ActiveDays}
                  title={dataList[0].title}
                  worldwideHistory={worldwideHistory}
                  countryHistory={countryHistory}
                  worldwideToggle={worldwideToggle}
                  percentageOfDeathsArray={percentageOfDeathsArray}
                  // percent={fourteenDayDeathsPercentage(
                  //    worldwideHistory,
                  //    countryHistory,
                  //    worldwideToggle
                  // )}
                  // id="activeId"
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
         <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ textAlign: "center", fontSize: "20px" }}>
               7-Day Average
            </div>
            <div style={{ width: "100%" }}>
               <HeatMap
                  xLabels={xLabels(percentageOfDeathsArray)}
                  yLabels={yLabels("Deaths")}
                  xLabelsLocation={"bottom"}
                  xLabelsVisibility={xLabelsVisibility}
                  xLabelWidth={100}
                  yLabelWidth={100}
                  height={115}
                  data={avgDeathsData(percentageOfDeathsArray)}
                  squares
                  onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
                  cellStyle={(background, value, min, max, data, x, y) => ({
                     background: `rgb(0, 151, 230, ${
                        1 - (max - value) / (max - min)
                     })`,
                     fontSize: "25px",
                     color: "#444",
                  })}
                  cellRender={(value) => value && `${value}%`}
                  title={(value, unit) => `${value}`}
               />
            </div>
            <div style={{ width: "100%", height: "100%" }}>
               <HeatMap
                  xLabels={xLabels(percentageOfActiveArray)}
                  yLabels={yLabels("Active")}
                  xLabelsLocation={"bottom"}
                  xLabelsVisibility={xLabelsVisibility}
                  xLabelWidth={100}
                  yLabelWidth={100}
                  height={115}
                  data={avgDeathsData(percentageOfActiveArray)}
                  squares
                  onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
                  cellStyle={(background, value, min, max, data, x, y) => ({
                     background: `rgb(200, 39, 6, ${
                        1 - (max - value) / (max - min)
                     })`,
                     fontSize: "25px",
                     color: "#444",
                  })}
                  cellRender={(value) => {
                     return (
                        <div style={{ height: "100%" }}>
                           {value && `${value}%`}
                        </div>
                     );
                  }}
                  title={(value, unit) => `${value}`}
               />
            </div>
         </div>
      </div>
   );
};

export default Cards;
