import React, { useEffect, useState } from "react";
import Card_Template from "../../Utils/Card_Template";
import { Col, ListGroup, Row } from "react-bootstrap";
import {
   fetchCurrentWorldWideData,
   fetchCurrentCountryData,
} from "../../../api";
import { countries } from "../../Utils/Arrays & Objects/Countries";
import CountryPicker from "../../DockLeft/CountryPicker/CountryPicker";

const Cards = ({
   choice,
   worldwideToggle,
   worldwideData,
   setWorldwideData,
   countryData,
   setCountryData,
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
         countryNumber: countryData.active,
      },
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
         title: "Deaths",
         worldwideNumber: worldwideData.deaths,
         countryNumber: countryData.deaths,
      },
   ];

   console.log()

   return (
      <div>
         <div style={{ width: "100%" }}>
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
               {dataList.map((dataItem) => {
                  return worldwideToggle ? (
                     <Col md={3}>
                        <Card_Template
                           title={dataItem.title}
                           number={dataItem.worldwideNumber}
                        />
                     </Col>
                  ) : (
                     <Col md={3}>
                        <Card_Template
                           title={dataItem.title}
                           number={dataItem.countryNumber}
                        />
                     </Col>
                  );
               })}
            </Row>
         </div>
      </div>
   );
};

export default Cards;
