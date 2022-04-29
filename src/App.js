import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import DockLeft from "./Components/DockLeft/DockLeft";
import { Container, Col, Row } from "react-bootstrap";
import DockRight from "./Components/DockRight/DockRight";
import {
   findSumOf1ActiveDay,
   findSumOf14ActiveDays,
   findSumOf14DeathDays,
   findSumOf1DeathDay,
   findSumOf14RecoveredDays,
   findSumOf1RecoveredDay,
   findFirstCase,
} from "../src/Components/Utils/Math/SumDifference";
import "./App.css";
import SnackbarProvider from "react-simple-snackbar";

const App = () => {
   const [choice, setChoice] = useState("Worldwide");
   const [worldwideToggle, setWorldwideToggle] = useState(true);
   const [title, setTitle] = useState("Worldwide");

   const [worldwideData, setWorldwideData] = useState(0);
   const [countryData, setCountryData] = useState(0);

   const [unavailableData, toggleUnavailableData] = useState(false);
   console.log("choice", choice);

   const [worldwideHistory, setWorldwideHistory] = useState({
      cases: {},
      deaths: {},
      recovered: {},
   });

   const [countryHistory, setCountryHistory] = useState({
      timeline: {
         cases: {},
         deaths: {},
         recovered: {},
      },
   });

   const [width, setWidth] = useState(window.innerWidth);
   const [height, setHeight] = useState(window.innerHeight);

   const updateDimensions = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
   };

   const [vaccinesCountry, setVaccinesCountry] = useState();
   const [vaccinesWorldwide, setVaccinesWorldwide] = useState();

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

   return (
      <div
         style={{
            backgroundColor: "#00072D",
            zIndex: 3,
            height: "100vh",
            width: "100vw",
         }}
      >
         <SnackbarProvider>
            {" "}
            <Header title={title} />
            <Container
               fluid
               style={{
                  display: "flex",
                  flexDirection: "row",
                  justifyContent: "center",
                  padding: "30px",
               }}
            >
               <Row style={{ width: "100%", justifyContent: "center" }}>
                  <Col
                     style={{
                        height: "80vh",
                        minWidth: "calc((100% - 100px) / 4)",
                        maxWidth: "calc((100% - 100px) / 4)",
                     }}
                  >
                     <DockLeft
                        setChoice={setChoice}
                        worldwideData={worldwideData}
                        choice={choice}
                        setTitle={setTitle}
                        setWorldwideToggle={setWorldwideToggle}
                        unavailableData={unavailableData}
                        toggleUnavailableData={toggleUnavailableData}
                     />
                  </Col>
                  <Col
                     md={6}
                     style={{
                        height: "80vh",
                        minWidth: "calc((100% - 100px) / 2)",
                        maxWidth: "calc((100% - 100px) / 2)",
                        overflow: "hidden",
                     }}
                  >
                     <Content
                        choice={choice}
                        worldwideToggle={worldwideToggle}
                        worldwideData={worldwideData}
                        setWorldwideData={setWorldwideData}
                        countryData={countryData}
                        setCountryData={setCountryData}
                        countryHistory={countryHistory}
                        setCountryHistory={setCountryHistory}
                        worldwideHistory={worldwideHistory}
                        setWorldwideHistory={setWorldwideHistory}
                        dataList={dataList}
                        unavailableData={unavailableData}
                        toggleUnavailableData={toggleUnavailableData}
                     />
                  </Col>
                  <Col
                     style={{
                        height: "80vh",
                        minWidth: "calc((100% - 100px) / 5)",
                        maxWidth: "calc((100% - 100px) / 5)",
                        background: "#615756",
                        overflowY: "scroll",
                     }}
                  >
                     <DockRight
                        choice={choice}
                        worldwideToggle={worldwideToggle}
                        worldwideData={worldwideData}
                        setWorldwideData={setWorldwideData}
                        countryData={countryData}
                        setCountryData={setCountryData}
                        countryHistory={countryHistory}
                        setCountryHistory={setCountryHistory}
                        worldwideHistory={worldwideHistory}
                        setWorldwideHistory={setWorldwideHistory}
                        setVaccinesCountry={setVaccinesCountry}
                        setVaccinesWorldwide={setVaccinesWorldwide}
                        vaccinesWorldwide={vaccinesWorldwide}
                        vaccinesCountry={vaccinesCountry}
                        dataList={dataList}
                        unavailableData={unavailableData}
                        toggleUnavailableData={toggleUnavailableData}
                     />
                  </Col>
               </Row>
            </Container>
            <Footer />
         </SnackbarProvider>
      </div>
   );
};

export default App;
