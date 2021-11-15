import React, { useRef, useState, useEffect } from "react";
import { Form } from "react-bootstrap";
import { fetchAllCurrentCountryData } from "../../../api";

const FilterCountry = ({
   setAllCountryData,
   allCountryData,
   setFoundCountries,
   foundCountries,
   countries,
}) => {
   const searchRef = useRef();
   const [value, setValue] = useState("");

   const filter = (e) => {
      const keyword = e.target.value;

      if (keyword !== "") {
         const results = allCountryData.filter((item) => {
            return item.country.toLowerCase().startsWith(keyword.toLowerCase());
         });
         setFoundCountries(results);
      } else {
         setFoundCountries(allCountryData);
      }
      setValue(keyword);
   };

   return (
      <div>
         <Form>
            <Form.Group className="mb-1">
               <Form.Control
                  type="email"
                  placeholder="Enter Country"
                  ref={searchRef}
                  onChange={filter}
               />
            </Form.Group>
         </Form>
      </div>
   );
};

export default FilterCountry;
