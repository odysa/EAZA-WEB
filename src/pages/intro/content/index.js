import React, { Component } from "react";
import { Row, Col, Drawer } from "antd";
import { OverPack } from "rc-scroll-anim";
import { Jumbotron, Card } from "react-bootstrap";
import { connect } from "react-redux";
import QueueAnim from "rc-queue-anim";
import { ButtonCustom } from "./style";
import * as url from "./result.png";
import Texty from "rc-texty";
import * as p1 from './p1.jpg'
import {MyLink} from "../../../common/header/style";
import * as p3 from './p3.jpg'

/**
 * content of home page
 */
class HomeContent extends Component {
  values = { visible: false };
  onClose = () => {
    this.values.visible = false;
  }
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
          <Col xs={0} sm={0} md={2} lg={4} xl={4}>
          </Col>
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
                  <MyLink href='/intro/intro.html'>
                    <ButtonCustom
                      variant="primary"
                    >
                      Introduction
                  </ButtonCustom>
                  </MyLink>
                </div>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={0} sm={0} md={2} lg={4} xl={4} />
        </Row>
        <Row>
          <Col xs={0} sm={0} md={2} lg={4} xl={4} />

          <Col xs={24} sm={24} md={20} lg={16} xl={16}>
            <OverPack style={{ overflow: "hidden", height: "60em" }}>
              <QueueAnim type="left" key="queue">
                <Jumbotron key="banner1" style={{ background: "transparent", height: "50%",display:'flex',justifyContent:'space-around',alignItems:'center' }}>
                  <div >
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
                  </div>
                  <div >
                  <img src={p3} alt="display course" style={{width:'640px',height:'320px'}}/>
                  </div>
                </Jumbotron>
              </QueueAnim>
              <OverPack style={{ overflow: "hidden" }}>
                <QueueAnim type="right" key="queue2">
                  <Jumbotron
                    key="banner2"
                    style={{ background: "transparent", height: "50%",display:'flex',justifyContent:'space-around',alignItems:'center'  }}
                  >
                    <div>
                      <img src={p1} alt="display information" style={{width:'640px',height:'320px'}}/>
                    </div>
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
                    </div>

                  </Jumbotron>
                </QueueAnim>
              </OverPack>
            </OverPack>
          </Col>
          <Col xs={0} sm={0} md={2} lg={4} xl={4} />
        </Row>
      </div>
    );
  }
}

export default connect()(HomeContent);
