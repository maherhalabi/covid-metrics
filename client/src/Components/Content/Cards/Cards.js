import React, { useEffect, useState } from "react";
import Card_Template from "../../Utils/Card_Template";

import {
   Col,
   ListGroup,
   Row,
   Table,
   Card,
   ListGroupItem,
} from "react-bootstrap";

import { ResponsiveContainer } from "recharts";
import HeatMap from "react-heatmap-grid";
import {
   fetchCurrentWorldWideData,
   fetchCurrentCountryData,
   fetchCountryHistoryData,
   fetchVaccineWorldwideTotal,
   fetchVaccineTotalByCountry,
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
import {} from "../../Utils/Math/PercentageDifference";
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
   const [vaccinesCountry, setVaccinesCountry] = useState();
   const [vaccinesWorldwide, setVaccinesWorldwide] = useState();

   useEffect(() => {
      if (!worldwideToggle) {
         fetchCurrentCountryData(setCountryData, choice);
         fetchVaccineTotalByCountry(setVaccinesCountry, choice);
      } else {
         fetchCurrentWorldWideData(setWorldwideData);
         fetchVaccineWorldwideTotal(setVaccinesWorldwide);
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
         // createPercentageArray: createPercentageArray(
         //    worldwideHistory.cases,
         //    countryHistory.timeline.cases,
         //    worldwideToggle,
         //    percentageOfActiveArray,
         //    "Cases"
         // ),
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
         // createPercentageArray: createPercentageArray(
         //    worldwideHistory.deaths,
         //    countryHistory.timeline.deaths,
         //    worldwideToggle,
         //    percentageOfDeathsArray,
         //    "Deaths"
         // ),
      },
      {
         title: "Vaccines Given",
         worldwideNumber: vaccinesWorldwide,
         countryNumber: vaccinesCountry,
      },
   ];

   function abbrNum(number, decPlaces) {
      decPlaces = Math.pow(10, decPlaces);

      var abbrev = ["k", "m", "b", "t"];

      for (var i = abbrev.length - 1; i >= 0; i--) {
         var size = Math.pow(10, (i + 1) * 3);
         if (size <= number) {
            number = Math.round((number * decPlaces) / size) / decPlaces;

            if (number == 1000 && i < abbrev.length - 1) {
               number = 1;
               i++;
            }
            number += abbrev[i];
            break;
         }
      }

      return number;
   }

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
            backgroundColor: "white",
            border: "2px solid white",
            borderRadius: "3px",
         }}
      >
         <Table striped bordered hover style={{ margin: 0 }}>
            <thead>
               <tr>
                  <th></th>
                  <th>Today</th>
                  <th>14-Day Amount</th>
               </tr>
            </thead>
            <tbody>
               <tr>
                  <td>Cases</td>
                  <td>{dataList[0].sumOf1ActiveDay.toLocaleString()}</td>
                  <td>{dataList[0].sumof14ActiveDays.toLocaleString()}</td>
               </tr>
               <tr>
                  <td>Deaths</td>
                  <td>{dataList[2].sumOf1ActiveDay.toLocaleString()}</td>
                  <td>{dataList[2].sumof14ActiveDays.toLocaleString()}</td>
               </tr>
            </tbody>
         </Table>
         <div
            style={{
               display: "flex",
               textAlign: "center",
               flexWrap: "wrap",

               overflow: "auto",
               justifyContent: "center",
            }}
         >
            <div style={{ flex: "0 1 auto", width: "250px", padding: "10px" }}>
               <Card_Template
                  number={
                     worldwideToggle
                        ? dataList[1].worldwideNumber
                        : dataList[1].countryNumber
                  }
                  title={dataList[1].title}
               />
            </div>
            <div style={{ flex: "0 1 auto", width: "250px", padding: "10px" }}>
               <Card_Template
                  number={
                     worldwideToggle
                        ? dataList[3].worldwideNumber
                        : dataList[3].countryNumber
                  }
                  title={dataList[3].title}
               />
            </div>
            <div style={{ flex: "0 1 auto", width: "250px", padding: "10px" }}>
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
      </div>
   );
};

export default Cards;
