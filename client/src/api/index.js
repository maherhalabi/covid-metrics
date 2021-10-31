import axios from "axios";
import moment from "moment";

const url = "https://disease.sh/v3/covid-19";

//argument must include [cases, recovered, deaths] daily globally.
export const fetchHistoryData = async (useState) => {
   try {
      const response = await axios
         .get(`${url}/historical/all?lastdays=all`)
         .then((item) => {
            const data = item.data;
            useState(data);
         });
   } catch (e) {
      console.log(e);
   }
};

export const fetchCountryHistoryData = async (useState, country) => {
   try {
      const response = await axios
         .get(`${url}/historical/${country}?lastdays=all`)
         .then((item) => {
            const data = item.data;
            useState(data);
         });
   } catch (e) {
      console.log(e);
   }
};

export const fetchCurrentWorldWideData = async (useState) => {
   try {
      const response = await axios.get(`${url}/all`).then((item) => {
         const data = item.data;
         useState(data);
      });
   } catch (e) {
      console.log(e);
   }
};

export const fetchCurrentCountryData = async (useState, country) => {
   try {
      const response = await axios
         .get(`${url}/countries/${country}`)
         .then((item) => {
            const data = item.data;
            useState(data);
         });
   } catch (e) {
      console.log(e);
   }
};

export const fetchVaccineWorldwideTotal = async () => {
   try {
      const response = await axios
         .get(`${url}/vaccine/coverage`)
         .then((item) => {
            const data = item.data;
         });
   } catch (e) {
      console.log(e);
   }
};

console.log("VACCINE TOTAL", fetchVaccineWorldwideTotal());

export const fetchVaccineTotalByCountry = async (country) => {
   try {
      const response = await axios
         .get(`${url}/vaccine/coverage/countries?lastdays=1`)
         .then((item) => {
            const data = item.data;
         });
   } catch (e) {
      console.log(e);
   }
};

console.log("VACCINE BY COUNTRY", fetchVaccineTotalByCountry());
