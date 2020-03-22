import React, { Component } from "react";
import { Layout } from "antd";
import { SearchBox } from "./style";
import { connect } from "react-redux";
import { actionCreaters } from "./store/index";
import Texty from "rc-texty";
import { SearchWrapper, HeadWrapper } from "./style";
import {
  NavDropdown,
  Nav,
  Navbar,
  NavItem,
  Form,
  Container,
  FormControl,
  NavbarBrand,
  NavLink
} from "react-bootstrap";
import { CSSTransition } from "react-transition-group";
const { Header } = Layout;
class Head extends Component {
  render() {
    const { handleInputFocus, handleInputBlur, focused } = this.props;
    return (
      <HeadWrapper>
        <Navbar
          expand="sm"
          sticky="top"
          style={{ height: "80%", padding: "0 16px 0 16px" }}
        >
          <div style={{ width: "20%" }}></div>
          <NavLink href="/" style={{ padding: "0 16px 0 16px" }}>
            <Navbar.Brand style={{ color: "#c41d7f", fontSize: "30px" }}>
              <Texty duration={1000} delay={200}>
                E A Z A
              </Texty>
            </Navbar.Brand>
          </NavLink>
          <Navbar.Toggle
            style={{ backgroundColor: "white" }}
            aria-controls="basic-navbar-nav"
          />
          <Navbar.Collapse id="basic-navbar-nav">
            <div style={{ width: "10%" }}></div>
            <Form inline style={{ width: "220px" }}>
              <SearchWrapper>
                <CSSTransition in={focused} timeout={200} classNames="slide">
                  <SearchBox
                    handleInputFocus={handleInputFocus}
                    handleInputBlur={handleInputBlur}
                  />
                </CSSTransition>
              </SearchWrapper>
            </Form>
          </Navbar.Collapse>
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav>
              <Nav.Item>
                <Nav.Link href="#home">Home</Nav.Link>
              </Nav.Item>
              <Nav.Item>
                <Nav.Link href="#link">Link</Nav.Link>
              </Nav.Item>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </HeadWrapper>
    );
  }
}
/*
class Head extends Component {
  render() {
    const { handleInputFocus, handleInputBlur } = this.props;
    return (
      <Header style={{ backgroundColor: "#262626" }}>
        <Row>
          <Col span={8}>
            <Logo>E A Z A</Logo>
          </Col>
          <Col span={8}>
            <SearchWrapper>
              <SearchBox
                handleInputFocus={handleInputFocus}
                handleInputBlur={handleInputBlur}
              />
            </SearchWrapper>
          </Col>
          <Col span={8}></Col>
        </Row>
      </Header>
    );
  }
}
*/
const mapStateToProps = state => {
  return {
    focused: state.getIn(["header", "focused"])
  };
};
const mapDispatchToProps = dispatch => {
  return {
    handleInputFocus() {
      dispatch(actionCreaters.searchFocus());
    },
    handleInputBlur() {
      dispatch(actionCreaters.searchBlur());
    }
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Head);
