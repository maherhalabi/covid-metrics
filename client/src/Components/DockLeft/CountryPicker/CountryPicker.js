import React from "react";
import { ListGroup } from "react-bootstrap";
import { countries } from "../../Utils/Arrays & Objects/Countries";

const CountryPicker = () => {
   return (
      <ListGroup
         style={{
            maxHeight: "300px",
            maxWidth: "300px",
            marginBottom: "10px",
            overflow: "scroll",
         }}
      >
         <ListGroup.Item value="worldwide">Worldwide</ListGroup.Item>
         {countries.map((item) => {
            return (
               <ListGroup.Item value={item.country}>
                  {item.country}
               </ListGroup.Item>
            );
         })}
      </ListGroup>
   );
};

export default CountryPicker;
