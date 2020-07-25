import React from "react";
import { Card } from "react-bootstrap";
import { ButtonCustom } from "./style";
import { AboutWrapper } from "./style";
import * as url from "../../../assets/result.png";

// card of introduction
const AboutCard = (props) => (
  <AboutWrapper>
    <Card style={{ border: "None" }}>
      <Card.Img variant="top" src={url} />
      <Card.Body style={{ display: "block", flex: "None" }}>
        <div style={{ textAlign: "center", display: "block" }}>
          <Card.Title>Aid your course serach</Card.Title>
          <Card.Text>
            Some features were built to help you explore courses!
          </Card.Text>  
          <a href="/intro/intro.html">
            <ButtonCustom variant="primary">Check it out!</ButtonCustom>
          </a>
        </div>
      </Card.Body>
    </Card>
  </AboutWrapper>
);

export default AboutCard;
