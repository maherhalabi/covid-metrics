import React from "react";

import Title from "./Title/Title";
import LastUpdated from "../DockRight/LastUpdated/LastUpdated";
import { Container } from "react-bootstrap";

const Header = ({ title }) => {
   return (
      <Container>
         <div>
            <Title title={title} />
         </div>
      </Container>
   );
};

export default Header;
