import React, { Component } from "react";
import { SearchBox } from "./style";
import { connect } from "react-redux";
import { actionCreaters } from "./store/index";
import Texty from "rc-texty";
import { Row, Col } from 'antd'
import { SearchWrapper, HeadWrapper } from "./style";
import { Nav, Navbar, Form, NavLink } from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
class Head extends Component {
  render() {
    const { handleInputFocus, handleInputBlur, focused } = this.props;
    return (
      <HeadWrapper>
        <Row>
          <Col xs={0} sm={0} md={2} lg={4} xl={4}></Col>
          <Col xs={24} sm={24} md={20} lg={16} xl={16}>
            <Navbar
              expand="sm"
              sticky="top"
              style={{ height: "100%", padding: '0 .5rem' }}
            >
              <NavLink href="/" style={{ padding: "0 0 0 0" }}>
                <Navbar.Brand style={{ color: "#c0392b", fontSize: "3em" }}>
                  <Texty duration={1000} delay={200}>
                    E A Z A
              </Texty>
                </Navbar.Brand>
              </NavLink>
              <Navbar.Toggle
                style={{ backgroundColor: "white" }}
                aria-controls="basic-navbar-nav"
              />
              <Navbar.Collapse id="basic-navbar-nav" style={{}}>
                <div style={{ width: 300 }}>
                  <SearchWrapper>
                    <CSSTransition in={focused} timeout={200} classNames="slide">
                      <SearchBox
                        style={{ background: 'black' }}
                        handleInputFocus={handleInputFocus}
                        handleInputBlur={handleInputBlur}
                      />
                    </CSSTransition>
                  </SearchWrapper>
                </div>
              </Navbar.Collapse>
              <Navbar.Collapse id="basic-navbar-nav" style={{ flexDirection: 'row-reverse' }}>
                <Nav style={{ fontSize: 20 }}>
                  <Nav.Link href="#home" style={{ color: '#7f7f7f' }}>Explore</Nav.Link>
                  <Nav.Link href="#link" style={{ color: '#7f7f7f' }}>API</Nav.Link>
                  <Nav.Link href="#link" style={{ color: '#7f7f7f' }}>API</Nav.Link>
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </Col>
          <Col xs={0} sm={0} md={2} lg={4} xl={4}></Col>
        </Row>
      </HeadWrapper>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    focused: state.getIn(["header", "focused"]),
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    handleInputFocus() {
      dispatch(actionCreaters.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreaters.searchBlur());
    },
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Head);
