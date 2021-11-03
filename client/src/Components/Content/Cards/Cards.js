import React, { useEffect, useState } from "react";
import Card_Template from "../../Utils/Card_Template";
import Card_Difference_Template from "../../Utils/Card_Difference_Template";
import { Col, ListGroup, Row, Table } from "react-bootstrap";
import {
   fetchCurrentWorldWideData,
   fetchCurrentCountryData,
   fetchCountryHistoryData,
} from "../../../api";
import { countries } from "../../Utils/Arrays & Objects/Countries";
import CountryPicker from "../../DockLeft/CountryPicker/CountryPicker";
import { findSumOf1ActiveDay } from "../../Utils/Math/OneDayDifferece";

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
         title: "Total Cases",
         worldwideNumber: worldwideData.cases,
         countryNumber: countryData.cases,
      },
      {
         title: "Recovered",
         worldwideNumber: worldwideData.recovered,
         countryNumber: countryData.recovered,
      },
      {
         title: "Active Cases",
         worldwideNumber: worldwideData.active,
         countryNumber: countryData.active,
         sumOf1ActiveDay: findSumOf1ActiveDay(
            worldwideToggle,
            worldwideHistory,
            countryHistory
         ),
      },
      {
         title: "Deaths",
         worldwideNumber: worldwideData.deaths,
         countryNumber: countryData.deaths,
      },
   ];

   // console.log(findSumOfTodayAndYesterday());

   return (
      <div style={{ width: "100%" }}>
         <Table striped bordered hover>
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
                  <td>{dataList[0].worldwideNumber}</td>
                  <td>{dataList[1].worldwideNumber}</td>
                  <td>{dataList[2].sumOf1ActiveDay}</td>
                  <td>{dataList[3].worldwideNumber}</td>
               </tr>
            </tbody>
         </Table>
      </div>
   );
};

export default Cards;
