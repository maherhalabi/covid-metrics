import axios from 'axios';
import moment from 'moment';

const url = 'https://covid19.mathdro.id/api';

export const fetchData = async (country) => {
    let changeableUrl = url;
    if(country) {
        changeableUrl = `${url}/countries/${country}`;
    }
    try {
        const { data: { confirmed, recovered, deaths, lastUpdate } } = await axios.get(changeableUrl);
        return { confirmed, recovered, deaths, lastUpdate };
    } catch (error) {
        console.log(error);
    }
}

export const fetchDailyData = async () => {
    try {
        const { data } = await axios.get(`${url}/daily`);
        const modifiedData = data.map((dailyData) => ({
            confirmed: dailyData.confirmed.total,
            deaths: dailyData.deaths.total,
            recovered: dailyData.recovered.total,
            date: dailyData.reportDate
        }));
        return modifiedData;
    } catch (error) {
        console.log(error);
    }
}

export const fetchCountries = async () => {
    try {
        const { data: { countries } } = await axios.get(`${url}/countries`);
        return countries.map((country) => country.name);
    } catch (error) {
        console.log(error);
    }
}

export const fetchPastData = async (country) => {
    const dailyURL = `${url}/daily`;
    let yesterday = moment().add(-1, 'days').format('M-DD-YYYY')
    let changeableUrl = dailyURL;
    if(country) {
        changeableUrl = `${url}/daily/${yesterday}`;
    }
    try {
        console.log(changeableUrl)
        const { data } = await axios.get(changeableUrl);
        let selectedData = {
            pastConfirmed: data[data.length - 1].confirmed.total,
            pastRecovered: data[data.length - 1].recovered.total,
            pastDeaths: data[data.length - 1].deaths.total
        }
        return data;
    } catch (error) {
        console.log(error);
    }
}