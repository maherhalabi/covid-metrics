import axios from "axios";
import moment from "moment";

const url = "https://disease.sh/v3/covid-19";
const populationUrl =
   "https://countriesnow.space/api/v0.1/countries/population";

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

export const fetchAllCurrentCountryData = async (useState, originalState) => {
   try {
      const response = await axios.get(`${url}/countries`).then((item) => {
         const data = item.data;
         const newArray = [];
         data.map((value) => {
            let newObject = {
               ["cases"]: value.cases,
               ["country"]: value.country,
            };
            newArray.push(newObject);
         });
         
         originalState(newArray);
         useState(newArray);
      });
   } catch (e) {
      console.log(e);
   }
};

export const fetchVaccineWorldwideTotal = async (useState) => {
   try {
      const response = await axios
         .get(`${url}/vaccine/coverage`)
         .then((item) => {
            const data = item.data;
            useState(data);
         });
   } catch (e) {
      console.log(e);
   }
};

console.log("VACCINE TOTAL", fetchVaccineWorldwideTotal());

export const fetchVaccineTotalByCountry = async (useState, country) => {
   try {
      const response = await axios
         .get(`${url}/vaccine/coverage/${country}?lastdays=1`)
         .then((item) => {
            const data = item.data;
            useState(data[data.length - 1]);
         });
   } catch (e) {
      console.log(e);
   }
};

console.log("VACCINE BY COUNTRY", fetchVaccineTotalByCountry());
