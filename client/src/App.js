import React from 'react';
import { Cards, Charts, CountryPicker, Title, Footer, LastUpdated } from './Components';
import { fetchData, fetchPastData } from './api'
import styles from './App.module.css';

class App extends React.Component {
    state = {
        data: {},
        pastData: {},
        country: '',
    }

    async componentDidMount() {
        const fetchedData = await fetchData();
        this.setState({ data: fetchedData});
        
        const fetchedPastData = await fetchPastData();
        this.setState({ pastData: fetchedPastData });
    }

    handleCountryChange = async(country) => {
        const fetchedData = await fetchData(country);
        this.setState({ data: fetchedData, country: country});
    }

    render() {
        const { data, pastData, country } = this.state;
        return(
            <div className={styles.container}>
                <Title />
                <LastUpdated data={data}/>
                <Cards data={data} pastData={pastData} country={country}/>
                <CountryPicker handleCountryChange={this.handleCountryChange}/>
                <Charts data={data} country={country}/>
                <Footer />
            </div>
        );
    }
}

export default App;