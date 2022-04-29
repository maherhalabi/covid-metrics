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
import { BounceLoader } from "react-spinners";

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
import CountUp from "react-countup";

const Cards = ({
   choice,
   worldwideToggle,
   worldwideData,
   setWorldwideData,
   countryData,
   setCountryData,
   worldwideHistory,
   countryHistory,
   dataList,
   vaccinesCountry,
   setVaccinesCountry,
   vaccinesWorldwide,
   setVaccinesWorldwide,
   unavailableData,
   toggleUnavailableData,
}) => {
   const [data, setData] = useState(0);
   useEffect(() => {
      if (!worldwideToggle) {
         fetchCurrentCountryData(setCountryData, choice);
         fetchVaccineTotalByCountry(setVaccinesCountry, choice);
      } else {
         fetchCurrentWorldWideData(setWorldwideData);
         fetchVaccineWorldwideTotal(setVaccinesWorldwide);
      }
      fetchCurrentWorldWideData(setData);

      // window.addEventListener("resize", updateDimensions);
      // return () => window.removeEventListener("resize", updateDimensions);
   }, [choice]);

   const percentageOfActiveArray = [];
   const percentageOfDeathsArray = [];

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
         }}
      >
         <div
            style={{
               display: "flex",
               textAlign: "center",
               flexWrap: "wrap",
               justifyItems: "center",
               justifyContent: "center",
            }}
         >
            <div
               style={{
                  background: "white",
                  width: "100%",
                  margin: "5px",
                  backgroundColor: "#615756",
               }}
            >
               <div
                  style={{
                     flex: "0 1 auto",
                     width: "100%",
                     padding: "5px",
                  }}
               >
                  <Card_Template
                     number={moment(data.updated).format("LLL")}
                     title={"Last Updated"}
                     backgroundColor={"white"}
                     fontSize="17px"
                     highlight="true"
                  />
               </div>
               <div
                  style={{
                     flex: "0 1 auto",
                     width: "100%",
                     padding: "5px",
                  }}
               >
                  <Card_Template
                     number={dataList[0].worldwideNumber}
                     oneDay={`+${dataList[0].sumOf1ActiveDay.toLocaleString()}`}
                     title={"Active Cases"}
                     backgroundColor={"white"}
                     showToolTip={true}
                     toolTipText="This number represents the amount gathered since yesterday."
                  />
               </div>
               <div style={{ flex: "0 1 auto", width: "100%", padding: "5px" }}>
                  <Card_Template
                     number={dataList[0].sumof14ActiveDays.toLocaleString()}
                     title={"14-Day Cases"}
                     backgroundColor={"white"}
                  />
               </div>
               <div style={{ flex: "0 1 auto", width: "100%", padding: "5px" }}>
                  <Card_Template
                     number={
                        <div>
                           <CountUp
                              end={`${findFirstCase(
                                 worldwideToggle,
                                 worldwideHistory,
                                 countryHistory
                              )}`}
                              duration={3}
                           />{" "}
                           Days Ago
                        </div>
                     }
                     title="First Case"
                     backgroundColor={"white"}
                  />
               </div>
            </div>
            <div
               style={{ background: "#615756", width: "100%", margin: "5px" }}
            >
               <div style={{ flex: "0 1 auto", width: "100%", padding: "5px" }}>
                  <Card_Template
                     number={
                        worldwideToggle
                           ? dataList[1].worldwideNumber
                           : dataList[1].countryNumber
                     }
                     title={dataList[1].title}
                     backgroundColor="#61FF7E "
                  />
               </div>
               <div style={{ flex: "0 1 auto", width: "100%", padding: "5px" }}>
                  <Card_Template
                     number={
                        worldwideToggle
                           ? dataList[3].worldwideNumber
                           : dataList[3].countryNumber
                     }
                     title={dataList[3].title}
                     backgroundColor="#61FF7E"
                  />
               </div>
            </div>

            <div
               style={{ background: "#615756", width: "100%", margin: "5px" }}
            >
               <div style={{ flex: "0 1 auto", width: "100%", padding: "5px" }}>
                  <Card_Template
                     number={
                        worldwideToggle
                           ? dataList[2].worldwideNumber
                           : dataList[2].countryNumber
                     }
                     oneDay={`+${dataList[2].sumOf1ActiveDay.toLocaleString()}`}
                     title={"Today's Deaths"}
                     backgroundColor="#FB9F89"
                     showToolTip={true}
                     toolTipText="This number represents the amount gathered since yesterday."
                  />
               </div>
               <div style={{ flex: "0 1 auto", width: "100%", padding: "5px" }}>
                  <Card_Template
                     number={`${findFirstCase(
                        worldwideToggle,
                        worldwideHistory,
                        countryHistory
                     )}`}
                     title="14-Day Deaths"
                     backgroundColor="#FB9F89"
                  />
               </div>
            </div>
         </div>
      </div>
   );
};

export default Cards;
