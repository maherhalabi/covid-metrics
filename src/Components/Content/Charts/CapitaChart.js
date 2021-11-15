import React, { useState, useEffect } from "react";
import {
   AreaChart,
   Area,
   XAxis,
   YAxis,
   CartesianGrid,
   Tooltip,
   ResponsiveContainer,
   LineChart,
   Legend,
   Line,
} from "recharts";
import Line_Chart_Template from "../../Utils/ComposeChart";
import {
   fetchHistoryData,
   fetchCountryHistoryData,
   fetchVaccineTotalByCountry,
   fetchCurrentWorldWideData,
   fetchVaccineWorldwideTotal,
   fetchVaccineCountryHistory,
   fetchVaccineWorldwideHistory,
} from "../../../api";
import {
   last90Days,
   worldwideDailyCases,
} from "../../Utils/Math/PercentageDifference";
import Bar_Chart_Template from "../../Utils/Bar_Chart_Template";
import { ButtonGroup, Dropdown } from "react-bootstrap";
import Button from "@restart/ui/esm/Button";

const CapitaChart = ({
   worldwideData,
   countryData,
   choice,
   worldwideToggle,
   worldwideHistory,
   setWorldwideHistory,
   countryHistory,
   setCountryHistory,
}) => {
   useEffect(() => {
      if (!worldwideToggle) {
         fetchCountryHistoryData(setCountryHistory, choice);
         // fetchVaccineTotalByCountry(setCountryHistory, choice);
      } else {
         fetchHistoryData(setWorldwideHistory);
         // fetchVaccineWorldwideTotal(setVaccineWorldwide);
      }
   }, [choice]);

   const casesTimeline = Object.entries(worldwideHistory.cases).map(
      ([key, value]) => {
         return { date: key, Cases: value };
      }
   );

   const deathsTimeline = Object.entries(worldwideHistory.deaths).map(
      ([key, value]) => {
         return { date: key, Deaths: value };
      }
   );

   // const dosesTimeline = Object.entries(vaccineWorldwideHistory).map(
   //    ([key, value]) => {
   //       return { date: key, Doses: value };
   //    }
   // );

   // const countryVaccineTimeline = Object.entries(vaccineCountryHistory).map(
   //    ([key, value]) => {
   //       return { date: key, Doses: value };
   //    }
   // );

   const countryCasesTimeline = Object.entries(
      countryHistory.timeline.cases
   ).map(([key, value]) => {
      return { date: key, Cases: value };
   });

   const countryDeathsTimeline = Object.entries(
      countryHistory.timeline.deaths
   ).map(([key, value]) => {
      return { date: key, Deaths: value };
   });

   return <LineChart />;
};
export default CapitaChart;
