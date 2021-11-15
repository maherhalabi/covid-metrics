import React, { useState } from "react";
import CountUp from "react-countup";
import { Card } from "react-bootstrap";
import ReactTooltip from "react-tooltip";
import { AiFillQuestionCircle } from "react-icons/ai";

const Card_Template = (props) => {
   const [show, setShow] = useState(false);

   return (
      <div>
         <Card
            border="dark"
            style={{
               width: "100%",
               backgroundColor: props.backgroundColor,
               color: "black",
               border: "none",
            }}
         >
            <Card.Header>{props.title}</Card.Header>
            <Card.Body>
               <Card.Title style={{ fontSize: props.fontSize }}>
                  {props.highlight ? (
                     <mark style={{ padding: "10px", background: "#fff740" }}>
                        {props.number}
                     </mark>
                  ) : (
                     props.number
                  )}
               </Card.Title>

               <div
                  style={{
                     display: "flex",
                     flexDirection: "row",
                     justifyContent: "center",
                     alignItems: "center",
                  }}
               >
                  <div>
                     <Card.Title style={{ color: "red", margin: 0 }}>
                        {props.oneDay}
                     </Card.Title>
                  </div>
                  <div>
                     {props.showToolTip ? (
                        <AiFillQuestionCircle
                           data-tip={props.toolTipText}
                           style={{ margin: "5px" }}
                        />
                     ) : null}
                  </div>
               </div>

               <Card.Title>{props.fourteenDays}</Card.Title>
            </Card.Body>
         </Card>
      </div>
   );
};

export default Card_Template;
