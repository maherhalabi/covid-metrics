import React, { useEffect, useState } from "react";
import Card_Template from "../../Utils/Card_Template";
import { Col, ListGroup, Row } from "react-bootstrap";
import {
   fetchCurrentWorldWideData,
   fetchCurrentCountryData,
} from "../../../api";
import { countries } from "../../Utils/Arrays & Objects/Countries";
import CountryPicker from "../../DockLeft/CountryPicker/CountryPicker";

const Cards = ({ choice, worldwideToggle }) => {
   const [worlwideData, setWorldwideData] = useState(0);
   const [countryData, setCountryData] = useState(0);

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
         worlwideNumber: worlwideData.active,
         countryNumber: countryData.active,
      },
      {
         title: "Total Cases",
         worlwideNumber: worlwideData.cases,
         countryNumber: countryData.cases,
      },
      {
         title: "Recovered",
         worlwideNumber: worlwideData.recovered,
         countryNumber: countryData.recovered,
      },
      {
         title: "Deaths",
         worlwideNumber: worlwideData.deaths,
         countryNumber: countryData.deaths,
      },
   ];

   return (
      <div>
         <div style={{ width: "100%" }}>
            <Row style={{ display: "flex", justifyContent: "space-between" }}>
               {dataList.map((dataItem) => {
                  return (
                     <Col md={3}>
                        <Card_Template
                           title={dataItem.title}
                           number={dataItem.worlwideNumber}
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
