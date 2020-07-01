import React, { Component } from "react";
import { Row, Col, Drawer } from "antd";
import { Card } from "react-bootstrap";
import { connect } from "react-redux";
import QueueAnim from "rc-queue-anim";
import {
  ButtonCustom,
  DisplayContent,
  ImageDisplay,
  TextDisplay,
  MobileText,
  ContentBox,
} from "./style";
import * as url from "./result.png";
import Texty from "rc-texty";
import * as p1 from "./p1.jpg";
import * as p3 from "./p3.jpg";

/**
 * content of home page
 */
class HomeContent extends Component {
  values = { visible: false };
  onClose = () => {
    this.values.visible = false;
  };
  render() {
    return (
      <div>
        <Drawer
          title="Basic Drawer"
          placement="right"
          closable={false}
          onClose={this.onClose}
          visible={this.values.visible}
        ></Drawer>
        <Row>
          <Col xs={0} sm={0} md={2} lg={4} xl={4}></Col>
          <Col xs={24} sm={24} md={20} lg={16} xl={16}>
            <Card
              style={{ width: "100%", height: "100%", border: "None" }}
              key="dis"
            >
              <Card.Img variant="top" src={url} />
              <Card.Body style={{ display: "block", flex: "None" }}>
                <div style={{ textAlign: "center", display: "block" }}>
                  <Card.Title>Aid your course serach</Card.Title>
                  <Card.Text>
                    Some features were built to help you explore courses!
                  </Card.Text>
                  <a href="/intro/intro.html">
                    <ButtonCustom variant="primary">Introduction</ButtonCustom>
                  </a>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={0} sm={0} md={2} lg={4} xl={4} />
        </Row>
        <Row>
          <Col xs={0} sm={0} md={2} lg={4} xl={4} />
          <Col xs={24} sm={24} md={20} lg={16} xl={16}>
            <ContentBox>
              <QueueAnim type="left" key="queue">
                <DisplayContent key="banner1">
                  <TextDisplay key="textDisplay">
                    <Texty
                      component="h2"
                      type="bottom"
                      mode="sync"
                      delay={200}
                      duration={100}
                    >
                      Breath, now Breadth
                    </Texty>
                    <Texty component="p" type="right" mode="sync" delay={250}>
                      GPA is important.
                    </Texty>
                    <Texty component="p" type="right" mode="sync" delay={250}>
                      Explore more possibilities.
                    </Texty>
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
              </QueueAnim>

              <QueueAnim type="right" key="queue2">
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
                    <Texty
                      component="h2"
                      mode="sync"
                      delay={200}
                      duration={100}
                    >
                      Charts, More than Charts
                    </Texty>
                    <Texty component="p" type="right" mode="sync" delay={250}>
                      Life is hard.
                    </Texty>
                    <Texty component="p" type="right" mode="sync" delay={250}>
                      Don't waste your time.
                    </Texty>
                  </TextDisplay>
                </DisplayContent>
              </QueueAnim>
            </ContentBox>
          </Col>
          <Col xs={0} sm={0} md={2} lg={4} xl={4} />
        </Row>
      </div>
    );
  }
}

export default connect()(HomeContent);
