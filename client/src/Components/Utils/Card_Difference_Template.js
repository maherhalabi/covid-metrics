import React from "react";
import CountUp from "react-countup";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";

const Card_Difference_Template = (props) => {
   return (
      <div>
         <Card
            style={{
               width: "12rem",
            }}
         >
            <Card.Body>
               <Card.Title>{props.title}</Card.Title>
               <Card.Text>{props.mainNumber}</Card.Text>
            </Card.Body>
            <ListGroup className="list-group-flush">
               <ListGroupItem>+{props.OneDayDifference}</ListGroupItem>
               <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
               <ListGroupItem>Vestibulum at eros</ListGroupItem>
            </ListGroup>
            <Card.Body>
               <Card.Link href="#">Card Link</Card.Link>
               <Card.Link href="#">Another Link</Card.Link>
            </Card.Body>
         </Card>
      </div>
   );
};

export default Card_Difference_Template;
