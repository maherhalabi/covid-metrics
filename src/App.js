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

   return (
      <div className="bg-light">
         <Header title={title} />
         <Container>
            <Row>
               <Col md={3} className="col-centered">
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
