import React, { useRef, useState, useEffect } from "react";
import { Form } from "react-bootstrap";

const FilterCountry = ({ setFoundCountries, foundCountries, countries }) => {
   const searchRef = useRef();
   const [value, setValue] = useState("");
   const handleSearch = (e) => {
      e.preventDefault();
   };

   const filter = (e) => {
      const keyword = e.target.value;

      if (keyword !== "") {
         const results = countries.filter((item) => {
            return item.country.toLowerCase().startsWith(keyword.toLowerCase());
         });
         setFoundCountries(results);
      } else {
         setFoundCountries(countries);
      }

      setValue(keyword);
   };

   useEffect(() => {
      console.log(foundCountries);
   }, [foundCountries]);

   return (
      <div>
         <Form>
            <Form.Group className="mb-3">
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
