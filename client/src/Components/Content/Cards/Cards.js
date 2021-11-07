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
   percentageArray,
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
   }, [choice]);

   const percentageArray = [];

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
            worldwideHistory,
            countryHistory,
            worldwideToggle,
            percentageArray
         ),
      },
   ];

   console.log(dataList[2].createPercentageArray);
   const xLabels = percentageArray.map((item) => {
      return item.date;
   });

   const xLabelsVisibility = new Array(7)
      .fill(0)
      .map((_, i) => (i % 2 === 0 ? true : false));

   const yLabels = ["Cases", "Deaths"];

   const data = new Array(yLabels.length).fill(0).map(() =>
      percentageArray.map((item) => {
         return item.percentage;
      })
   );
   console.log(data);

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
                  percentageArray={percentageArray}
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
            <div style={{ width: "100%", height: "200px" }}>
               <HeatMap
                  xLabels={xLabels}
                  yLabels={yLabels}
                  xLabelsLocation={"bottom"}
                  xLabelsVisibility={xLabelsVisibility}
                  xLabelWidth={100}
                  yLabelWidth={100}
                  height={100}
                  data={data}
                  squares
                  onClick={(x, y) => alert(`Clicked ${x}, ${y}`)}
                  cellStyle={(background, value, min, max, data, x, y) => ({
                     background: `rgb(0, 151, 230, ${
                        1 - (max - value) / (max - min)
                     })`,
                     fontSize: "13px",
                     color: "#444",
                  })}
                  cellRender={(value) => value && `${value}%`}
                  title={(value, unit) => `${value}`}
               />
            </div>
         </div>
      </div>
   );
};

export default Cards;
