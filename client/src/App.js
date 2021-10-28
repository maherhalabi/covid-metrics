import React, { useState } from "react";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import DockLeft from "./Components/DockLeft/DockLeft";
import { Container, Col, Row } from "react-bootstrap";

const App = () => {
   const [choice, setChoice] = useState("Worldwide");
   const [worldwideToggle, setWorldwideToggle] = useState(true);

   return (
      <div className="bg-light">
         <Header />
         <Container>
            <Row>
               <Col md={3} className="col-centered">
                  <DockLeft
                     setChoice={setChoice}
                     setWorldwideToggle={setWorldwideToggle}
                  />
               </Col>
               <Col md={9}>
                  <Content choice={choice} worldwideToggle={worldwideToggle} />
               </Col>
            </Row>
         </Container>
         <Footer />
      </div>
   );
};

export default App;
