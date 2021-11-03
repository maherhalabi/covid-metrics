import React from "react";

const findValueToCompare = (obj, int) => {
   return Object.values(obj.cases)[Object.values(obj.cases).length - int];
};

export const findSumOf1ActiveDay = (
   toggle,
   worldwideHistory,
   countryHistory
) => {
   if (toggle) {
      const lastInt = findValueToCompare(worldwideHistory, 1);
      const beforeLastInt = findValueToCompare(worldwideHistory, 2);
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
