import React from "react";
import {
  DisplayContent,
  ImageDisplay,
  TextDisplay,
  MobileText,
  ContentBox,
} from "./style";
import * as p1 from "../../../assets/p1.jpg";
import * as p3 from "../../../assets/p3.jpg";

// Card to display info of web
const InfoCard = (props) => (
  <ContentBox>
    <DisplayContent key="banner1">
      <TextDisplay key="textDisplay">
        <h3>Breath, now Breadth</h3>
        <br />
        <h5>GPA is important.</h5>
        <h6>Explore more possibilities.</h6>
      </TextDisplay>
      <MobileText>Find courses by breadths</MobileText>
      <ImageDisplay>
        <img
          src={p3}
          alt="display course"
          style={{ width: "100%", height: "100%" }}
        />
      </ImageDisplay>
    </DisplayContent>
    <DisplayContent key="banner2">
      <MobileText>Get detailed information</MobileText>
      <ImageDisplay>
        <img
          src={p1}
          alt="display information"
          style={{ width: "100%", height: "100%" }}
        />
      </ImageDisplay>
      <TextDisplay style={{ textAlign: "right" }}>
        <h3>Charts, More than Charts</h3>
        <br />
        <h5>Life is hard.</h5>
        <h6>Don't waste your time.</h6>
      </TextDisplay>
    </DisplayContent>
  </ContentBox>
);

export default InfoCard;
