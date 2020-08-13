import React from 'react';

import { Cards, Charts, CountryPicker } from './Components';
import { Container } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { fetchData } from './api'

class App extends React.Component {
    
    async componentDidMount() {
        const data = await fetchData();
        console.log(data);
    }

    render() {
        return(
            <Container>
                <Cards />
                <Charts />
                <CountryPicker />
            </Container>
        );
    }
}

export default App;