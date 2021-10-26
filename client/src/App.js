import React from "react";
import Header from "./Components/Header/Header";
import Cards from "./Components/Cards/Cards";
import Footer from "./Components/Footer/Footer";
import "bootstrap/dist/css/bootstrap.css";

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
         <div>
            <Header />
            <Cards />
            {/* <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Charts data={data} country={country}/> */}
            <Footer />
         </div>
      );
   }
}

export default App;
