import React, { useEffect, useState } from "react";
import Card_Template from "../../Utils/Card_Template";
import { Col, ListGroup, Row } from "react-bootstrap";
import {
   fetchCurrentWorldWideData,
   fetchCurrentCountryData,
} from "../../../api";
import { countries } from "../../Utils/Arrays & Objects/Countries";
import CountryPicker from "../../DockLeft/CountryPicker/CountryPicker";

const Cards = () => {
   const [worlwideData, setWorldwideData] = useState(0);
   const [countryData, setCountryData] = useState(0);

   useEffect(() => {
      fetchCurrentWorldWideData(setWorldwideData);
      fetchCurrentCountryData(setCountryData, "USA");
   }, []);

   const dataList = [
      //WORLDWIDE CASES DATA
      {
         title: "Active Cases",
         number: worlwideData.active,
      },
      {
         title: "Total Cases",
         number: worlwideData.cases,
      },
      {
         title: "Recovered",
         number: worlwideData.recovered,
      },
      {
         title: "Deaths",
         number: worlwideData.deaths,
      },
   ];

   return (
      <div>
         <div style={{ width: "100%" }}>
            <Row>
               {dataList.map((dataItem) => {
                  return (
                     <Col md={3}>
                        <Card_Template
                           title={dataItem.title}
                           number={dataItem.number}
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
