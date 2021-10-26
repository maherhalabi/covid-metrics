import axios from "axios";
import moment from "moment";

const url = "https://disease.sh/v3/covid-19";

//argument must include [cases, recovered, deaths] daily globally.
export const fetchHistoryData = async () => {
   try {
      const response = await axios.get(`${url}/historical/all`).then((item) => {
         const data = item.data;
      });
   } catch (e) {
      console.log(e);
   }
};

console.log("HISTORY", fetchHistoryData());

export const fetchCurrentWorldWideData = async () => {
   try {
      const response = await axios.get(`${url}/all`).then((item) => {
         const data = item.data;
      });
   } catch (e) {
      console.log(e);
   }
};

console.log("CURRENT WORLDWIDE", fetchCurrentWorldWideData());

export const fetchCurrentCountryData = async (country) => {
   try {
      const response = await axios
         .get(`${url}/countries/${country}`)
         .then((item) => {
            const data = item.data;
         });
   } catch (e) {
      console.log(e);
   }
};

console.log("CURRENT COUNTRY", fetchCurrentCountryData("Albania"));

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
