import React from "react";
import Header from "./Components/Header/Header";
import Content from "./Components/Content/Content";
import Footer from "./Components/Footer/Footer";
import DockLeft from "./Components/DockLeft/DockLeft";
import { Container, Col, Row } from "react-bootstrap";

class App extends React.Component {
   // async componentDidMount() {
   //     const fetchedData = await fetchData();
   //     this.setState({ data: fetchedData});

   //     const fetchedPastData = await fetchPastData();
   //     this.setState({ pastData: fetchedPastData });
   // }

   // handleCountryChange = async(country) => {
   //     const fetchedData = await fetchData(country);
   //     const fetchedPastData = await fetchPastData(country);
   //     this.setState({ data: fetchedData, country: country});
   //     console.log(fetchedPastData);
   // }

   render() {
      return (
         <div className="bg-light">
            <Header />
            <Container>
               <Row>
                  <Col md={3} className="col-centered">
                     <DockLeft />
                  </Col>
                  <Col
                     md={9}
                     style={{ display: "flex", justifyContent: "center" }}
                  >
                     <Content />
                  </Col>
               </Row>
            </Container>
            <Footer />
         </div>
      );
   }
}

export default App;
