import React from "react";
import CountUp from "react-countup";
import { Card } from "react-bootstrap";

const Card_Template = (props) => {
   return (
      <div>
         <Card border="dark" style={{ width: "18rem" }}>
            <Card.Header>{props.title}</Card.Header>
            <Card.Body>
               <Card.Title>{props.number}</Card.Title>
            </Card.Body>
         </Card>
      </div>
   );
};

export default Card_Template;
