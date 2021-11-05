import React from "react";
import moment from "moment";

const findValueToCompare = (objValue, int) => {
   return Object.values(objValue)[Object.values(objValue).length - int];
};

export const findSumOf1ActiveDay = (
   toggle,
   worldwideHistory,
   countryHistory
) => {
   if (toggle) {
      const lastInt = findValueToCompare(worldwideHistory.cases, 1);
      const beforeLastInt = findValueToCompare(worldwideHistory.cases, 2);
      return lastInt - beforeLastInt;
   } else {
      const beforeLastInt = findValueToCompare(
         countryHistory.timeline.cases,
         2
      );
      const lastInt = findValueToCompare(countryHistory.timeline.cases, 1);

      return lastInt - beforeLastInt;
   }
};

export const findSumOf14ActiveDays = (
   toggle,
   worldwideHistory,
   countryHistory
) => {
   if (toggle) {
      const lastInt = findValueToCompare(worldwideHistory.cases, 1);
      const beforeLastInt = findValueToCompare(worldwideHistory.cases, 15);
      return lastInt - beforeLastInt;
   } else {
      const beforeLastInt = findValueToCompare(
         countryHistory.timeline.cases,
         15
      );
      const lastInt = findValueToCompare(countryHistory.timeline.cases, 1);

      return lastInt - beforeLastInt;
   }
};

export const findSumOf1DeathDay = (
   toggle,
   worldwideHistory,
   countryHistory
) => {
   if (toggle) {
      const lastInt = findValueToCompare(worldwideHistory.deaths, 1);
      const beforeLastInt = findValueToCompare(worldwideHistory.deaths, 2);
      return lastInt - beforeLastInt;
   } else {
      const beforeLastInt = findValueToCompare(
         countryHistory.timeline.deaths,
         2
      );
      const lastInt = findValueToCompare(countryHistory.timeline.deaths, 1);

      return lastInt - beforeLastInt;
   }
};

export const findSumOf14DeathDays = (
   toggle,
   worldwideHistory,
   countryHistory
) => {
   if (toggle) {
      const lastInt = findValueToCompare(worldwideHistory.deaths, 1);
      const beforeLastInt = findValueToCompare(worldwideHistory.deaths, 15);
      return lastInt - beforeLastInt;
   } else {
      const beforeLastInt = findValueToCompare(
         countryHistory.timeline.deaths,
         15
      );
      const lastInt = findValueToCompare(countryHistory.timeline.deaths, 1);

      return lastInt - beforeLastInt;
   }
};

export const findSumOf1RecoveredDay = (
   toggle,
   worldwideHistory,
   countryHistory
) => {
   if (toggle) {
      const lastInt = findValueToCompare(worldwideHistory.recovered, 1);
      const beforeLastInt = findValueToCompare(worldwideHistory.recovered, 2);
      return lastInt - beforeLastInt;
   } else {
      const beforeLastInt = findValueToCompare(
         countryHistory.timeline.recovered,
         2
      );
      const lastInt = findValueToCompare(countryHistory.timeline.recovered, 1);

      return lastInt - beforeLastInt;
   }
};

export const findSumOf14RecoveredDays = (
   toggle,
   worldwideHistory,
   countryHistory
) => {
   if (toggle) {
      const lastInt = findValueToCompare(worldwideHistory.recovered, 1);
      const beforeLastInt = findValueToCompare(worldwideHistory.recovered, 15);
      return lastInt - beforeLastInt;
   } else {
      const beforeLastInt = findValueToCompare(
         countryHistory.timeline.recovered,
         15
      );
      const lastInt = findValueToCompare(countryHistory.timeline.recovered, 1);

      return lastInt - beforeLastInt;
   }
};

export const findFirstCase = (
   worldwideToggle,
   worldwideHistory,
   countryHistory
) => {
   const getFirstDate = () => {
      const getKeyByValue = (object, value) => {
         for (var prop in object) {
            if (object.hasOwnProperty(prop)) {
               if (object[prop] > 1) return prop;
            }
         }
      };

      if (worldwideToggle) {
         return moment(getKeyByValue(worldwideHistory.cases, 1)).format("L");
      } else {
         return moment(getKeyByValue(countryHistory.timeline.cases, 1)).format(
            "L"
         );
      }
   };

   var a = moment(getFirstDate());
   var b = moment(moment().format("MM/DD/YYYY"));

   return b.diff(a, "days");
};
