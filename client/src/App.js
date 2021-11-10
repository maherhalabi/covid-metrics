import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import DockLeft from "./Components/DockLeft/DockLeft";
import { Container, Col, Row } from "react-bootstrap";

const App = () => {
   const [choice, setChoice] = useState("Worldwide");
   const [worldwideToggle, setWorldwideToggle] = useState(true);
   const [title, setTitle] = useState("Worldwide");

   const [worldwideData, setWorldwideData] = useState(0);
   const [countryData, setCountryData] = useState(0);

   const [width, setWidth] = useState(window.innerWidth);
   const [height, setHeight] = useState(window.innerHeight);

   const updateDimensions = () => {
      setWidth(window.innerWidth);
      setHeight(window.innerHeight);
   };

   return (
      <div style={{ backgroundColor: "black" }}>
         <Header title={title} />
         <Container>
            <Row style={{}}>
               <Col
                  md={3}
                  style={{
                     height: "80vh",
                     maxWidth: "400px",
                  }}
               >
                  <DockLeft
                     setChoice={setChoice}
                     worldwideData={worldwideData}
                     choice={choice}
                     setTitle={setTitle}
                     setWorldwideToggle={setWorldwideToggle}
                  />
               </Col>
               <Col md={9}>
                  <Content
                     choice={choice}
                     worldwideToggle={worldwideToggle}
                     worldwideData={worldwideData}
                     setWorldwideData={setWorldwideData}
                     countryData={countryData}
                     setCountryData={setCountryData}
                  />
               </Col>
            </Row>
         </Container>
         <Footer />
      </div>
   );
};

export default App;
