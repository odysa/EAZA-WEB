import React, { Component } from "react";
import { Row, Col, Layout } from "antd";
import { OverPack } from "rc-scroll-anim";
import { Jumbotron, Card } from "react-bootstrap";
import { connect } from "react-redux";
import QueueAnim from "rc-queue-anim";
import { ButtonCustom } from "./style";
import * as url from "./result.jpg";
import Sider from "antd/lib/layout/Sider";
import Texty from "rc-texty";
class HomeContent extends Component {
  render() {
    return (
      <div>
        <Row style={{}}>
          <Col xs={0} sm={0} md={2} lg={4} xl={4}>
          </Col>
          <Col xs={24} sm={24} md={20} lg={16} xl={16}>
            <Card
              style={{ width: "100%", height: "100%", border: "None" }}
              key="dis"
            >
              <Card.Img variant="top" src={url} style={{}} />
              <Card.Body style={{ display: "block", flex: "None" }}>
                <div style={{ textAlign: "center", display: "block" }}>
                  <Card.Title>Aid your course serach</Card.Title>
                  <Card.Text>
                    Some features were built to help you explore courses!
                  </Card.Text>
                  <ButtonCustom variant="primary">
                    Explore New Features
                  </ButtonCustom>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={0} sm={0} md={2} lg={4} xl={4} ></Col>
        </Row>
        <Row>
          <Col xs={0} sm={0} md={2} lg={4} xl={4} >
          </Col>
          <Col xs={24} sm={24} md={20} lg={16} xl={16}>
            <OverPack style={{ overflow: "hidden", height: "60em" }}>
              <QueueAnim type="left" key="queue">
                <Jumbotron key="banner1" style={{ background: "transparent", height: "50%" }}>
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
                    Explore more possibilites.
                  </Texty>
                  <p>
                    <ButtonCustom>Learn more</ButtonCustom>
                  </p>
                </Jumbotron>
              </QueueAnim>
              <OverPack style={{ overflow: "hidden" }}>
                <QueueAnim type="right" key="queue2">
                  <Jumbotron
                    key="banner2"
                    style={{ background: "transparent", height: "50%" }}
                  >
                    <div style={{ textAlign: "right" }}>
                      <Texty
                        component="h2"
                        type="bottom"
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
                      <p>
                        <ButtonCustom>Learn more</ButtonCustom>
                      </p>
                    </div>
                  </Jumbotron>
                </QueueAnim>
              </OverPack>
            </OverPack>
          </Col>
          <Col xs={0} sm={0} md={2} lg={4} xl={4} ></Col>
        </Row>
      </div>
    );
  }
}

export default connect()(HomeContent);
