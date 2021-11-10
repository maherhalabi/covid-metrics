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
            useState(Object.values(data)[Object.values(data).length - 1]);
         });
   } catch (e) {
      console.log(e);
   }
};

export const fetchVaccineTotalByCountry = async (useState, country) => {
   try {
      const response = await axios
         .get(`${url}/vaccine/coverage/countries/${country}`)
         .then((item) => {
            const data = Object.values(item.data.timeline)[
               Object.values(item.data.timeline).length - 1
            ];
            useState(data);
         });
   } catch (e) {
      console.log(e);
   }
};

export const fetchVaccineCountryHistory = async (useState, country) => {
   https: try {
      const response = await axios
         .get(`${url}/vaccine/coverage/countries?lastdays=all`)
         .then((item) => {
            const data = item.data;
            const results = data.filter((item) => item.country === country);
            useState(results[0].timeline);
         });
   } catch (e) {
      console.log(e);
   }
};

export const fetchVaccineWorldwideHistory = async (useState) => {
   https: try {
      const response = await axios
         .get(`${url}/vaccine/coverage?lastdays=all`)
         .then((item) => {
            const data = item.data;
            useState(data);
         });
   } catch (e) {
      console.log(e);
   }
};

export const fetchAllCountryData = async (useState) => {
   https: try {
      const response = await axios.get(`${url}/countries/`).then((item) => {
         const data = item.data;
         useState(data);
      });
   } catch (e) {
      console.log(e);
   }
};
