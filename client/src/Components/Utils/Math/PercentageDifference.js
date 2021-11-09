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
   array,
   string
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
         obj[`${string}`] = percentageChange.toFixed(3);

         array.push(obj);
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
         obj[`${string}`] = percentageChange.toFixed(3);

         array.push(obj);
      }

      return array;
   }
};

export const worldwideDailyCases = (
   worldwideHistory,
   countryHistory,
   sevenDayAvgArray,
   toggle
) => {
   if (toggle) {
      const lastInt = Object.values(worldwideHistory).length - 1;

      const dateArray = [];
      const dailyArray = [];
      const avg7Array = [];

      const combinedArray = [];

      for (let i = 1; i < lastInt; i++) {
         const date = Object.keys(worldwideHistory)[i];
         let firstValue = Object.values(worldwideHistory)[i];

         let secondValue = Object.values(worldwideHistory)[i + 1];
         let dailyCase = secondValue - firstValue;
         let obj = {};

         dailyArray.push(dailyCase);
         dateArray.push(date);
      }

      let numOfDays = 7;

      const lastIntSevenDay = dailyArray.length - 1;

      for (let i = 0; i < lastIntSevenDay + 1; i++) {
         let total = 0;

         for (let j = i - numOfDays; j < i; j++) {
            total += dailyArray[j];
         }
         let grandTotal = total / numOfDays;

         avg7Array.push(grandTotal.toFixed(0));
      }

      for (let i = 0; i < lastInt - 1; i++) {
         let obj = {};
         obj["date"] = dateArray[i];
         obj["cases"] = dailyArray[i];
         obj["sevenDayAvg"] = avg7Array[i];

         combinedArray.push(obj);
      }

      return combinedArray;
   } else {
      const lastInt = Object.values(countryHistory).length - 1;

      const dateArray = [];
      const dailyArray = [];
      const avg7Array = [];

      const combinedArray = [];

      for (let i = 1; i < lastInt; i++) {
         const date = Object.keys(countryHistory)[i];
         let firstValue = Object.values(countryHistory)[i];

         let secondValue = Object.values(countryHistory)[i + 1];
         let dailyCase = secondValue - firstValue;
         let obj = {};

         dailyArray.push(dailyCase);
         dateArray.push(date);
      }

      let numOfDays = 7;

      const lastIntSevenDay = dailyArray.length - 1;

      for (let i = 0; i < lastIntSevenDay + 1; i++) {
         let total = 0;

         for (let j = i - numOfDays; j < i; j++) {
            total += dailyArray[j];
         }
         let grandTotal = total / numOfDays;

         avg7Array.push(grandTotal.toFixed(0));
      }

      for (let i = 0; i < lastInt - 1; i++) {
         let obj = {};
         obj["date"] = dateArray[i];
         obj["cases"] = dailyArray[i];
         obj["sevenDayAvg"] = avg7Array[i];

         combinedArray.push(obj);
      }

      return combinedArray;
   }
};

export const last90Days = (combinedArray) => {
   let last90daysArray = [];

   for (let i = combinedArray.length - 90; i < combinedArray.length; i++) {
      last90daysArray.push(combinedArray[i]);
   }

   return last90daysArray;
};
