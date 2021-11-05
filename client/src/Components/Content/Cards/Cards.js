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
      },
   ];

   return (
      <div style={{ width: "100%" }}>
         <div style={{ display: "flex", justifyContent: "space-between" }}>
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
                  <div>
                     <Card.Body>
                        <Card.Title>
                           {worldwideToggle ? worldwideNumber : countryNumber}
                        </Card.Title>
                        <Card.Text>{title}</Card.Text>
                     </Card.Body>
                  </div>
               );
            })}
            <div>
               <Card.Body>
                  <Card.Title>
                     {findFirstCase(
                        worldwideToggle,
                        worldwideHistory,
                        countryHistory
                     )}
                  </Card.Title>
                  <Card.Text>First Case</Card.Text>
               </Card.Body>
            </div>
         </div>

         {/* <Table striped bordered hover>
            <thead>
               <tr>
                  <th></th>
                  {dataList.map((dataItem) => {
                     return <th>{dataItem.title}</th>;
                  })}
               </tr>
            </thead>
            <tbody>
               {worldwideToggle ? (
                  <tr>
                     <td></td>
                     <td>{dataList[0].worldwideNumber}</td>
                     <td>{dataList[1].worldwideNumber}</td>
                     <td>{dataList[2].worldwideNumber}</td>
                     <td>{dataList[3].worldwideNumber}</td>
                  </tr>
               ) : (
                  <tr>
                     <td></td>
                     <td>{dataList[0].countryNumber}</td>
                     <td>{dataList[1].countryNumber}</td>
                     <td>{dataList[2].countryNumber}</td>
                     <td>{dataList[3].countryNumber}</td>
                  </tr>
               )}
               <tr>
                  <td>1 Day</td>
                  <td>{dataList[2].sumOf1ActiveDay}</td>
                  <td>
                     {dataList[1].sumOf1ActiveDay === 0
                        ? "Unavailable"
                        : dataList[1].sumOf1ActiveDay}
                  </td>
                  <td>{dataList[2].sumOf1ActiveDay}</td>
                  <td>{dataList[3].sumOf1ActiveDay}</td>
               </tr>
               <tr>
                  <td>14 Days</td>
                  <td>{dataList[2].sumof14ActiveDays}</td>
                  <td>
                     {dataList[1].sumof14ActiveDays === 0
                        ? "Unavailable"
                        : dataList[1].sumof14ActiveDays}
                  </td>
                  <td>{dataList[2].sumof14ActiveDays}</td>
                  <td>{dataList[3].sumof14ActiveDays}</td>
               </tr>
               {worldwideToggle ? (
                  <tr>
                     <td>Per 1 Million</td>
                     <td>{dataList[0].worldWidePerMillion}</td>
                     <td>{dataList[1].worldWidePerMillion}</td>
                     <td>{dataList[2].worldWidePerMillion}</td>
                     <td>{dataList[3].worldWidePerMillion}</td>
                  </tr>
               ) : (
                  <tr>
                     <td>Per 1 Million</td>
                     <td>{dataList[0].countryPerMillion}</td>
                     <td>{dataList[1].countryPerMillion}</td>
                     <td>{dataList[2].countryPerMillion}</td>
                     <td>{dataList[3].countryPerMillion}</td>
                  </tr>
               )}
            </tbody>
         </Table> */}
      </div>
   );
};

export default Cards;
