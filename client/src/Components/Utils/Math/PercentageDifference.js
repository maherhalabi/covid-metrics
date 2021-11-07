import React from "react";

const findValueToCompare = (objValue, int) => {
   return Object.values(objValue)[Object.values(objValue).length - int];
};

const findKeyToCompare = (objValue, int) => {
   return Object.keys(objValue)[Object.keys(objValue).length - int];
};

function getPercentageChange(oldNumber, newNumber) {
   let decreaseValue = oldNumber - newNumber;

   return (decreaseValue / oldNumber) * 100;
}

export const fourteenDayActivePercentage = (
   worldwideHistory,
   countryHistory,
   toggle
) => {
   if (toggle) {
      const lastInt = findValueToCompare(worldwideHistory.cases, 1);
      const beforeLastInt = findValueToCompare(worldwideHistory.cases, 14);
      return getPercentageChange(lastInt, beforeLastInt);
   } else {
      const beforeLastInt = findValueToCompare(
         countryHistory.timeline.cases,
         7
      );
      const lastInt = findValueToCompare(countryHistory.timeline.cases, 1);

      return getPercentageChange(lastInt, beforeLastInt);
   }
};

export const fourteenDayDeathsPercentage = (
   worldwideHistory,
   countryHistory,
   toggle
) => {
   if (toggle) {
      const lastInt = findValueToCompare(worldwideHistory.deaths, 1);
      const beforeLastInt = findValueToCompare(worldwideHistory.deaths, 7);
      return getPercentageChange(lastInt, beforeLastInt);
   } else {
      const beforeLastInt = findValueToCompare(
         countryHistory.timeline.deaths,
         7
      );
      const lastInt = findValueToCompare(countryHistory.timeline.deaths, 1);
      return getPercentageChange(lastInt, beforeLastInt);
   }
};
//30/45 × 100 = 66.67%.

const daysArray = [7, 14, 21, 28, 35, 42, 49, 54];

export const createPercentageArray = (
   worldwideHistory,
   countryHistory,
   toggle,
   array
) => {
   if (toggle) {
      for (let i = 0; i < daysArray.length - 1; i++) {
         const lastDate = findKeyToCompare(worldwideHistory, daysArray[i + 1]);

         const beforeLastInt = findValueToCompare(
            worldwideHistory,
            daysArray[i + 1]
         );
         const lastInt = findValueToCompare(worldwideHistory, daysArray[i]);
         const percentageChange = getPercentageChange(lastInt, beforeLastInt);
         let obj = {};
         obj["date"] = lastDate;
         obj["percentage"] = percentageChange.toFixed(3);

         array.push(obj);

         // Display only even labels
      }
      return array;
   } else {
      for (let i = 0; i < daysArray.length - 1; i++) {
         const lastDate = findKeyToCompare(countryHistory, daysArray[i + 1]);

         const beforeLastInt = findValueToCompare(
            countryHistory,
            daysArray[i + 1]
         );
         const lastInt = findValueToCompare(countryHistory, daysArray[i]);
         const percentageChange = getPercentageChange(lastInt, beforeLastInt);
         let obj = {};
         obj["date"] = lastDate;
         obj["percentage"] = percentageChange.toFixed(3);

         array.push(obj);
      }

      return array;
   }
};
