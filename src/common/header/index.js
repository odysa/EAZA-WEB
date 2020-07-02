/*
 * @Author: Chengxu Bian
 * @Date: 2020-07-01 18:09:42
 * @Last Modified by: Chengxu Bian
 * @Last Modified time: 2020-07-02 17:51:12
 */
import React, { Component } from "react";
import {
  Header,
  NormalContainer,
  Logo,
  NormalGithubLink as GithubLink,
  Toggle,
  NormalIntro,
  SearchWrapper,
} from "./style";

import ToggleBoard from "../../component/toggleBoard";
import { Affix } from "antd";
import { withRouter } from "react-router-dom";
import SearchBox from "../../component/searchBox";
class MyHeader extends Component {
  constructor(props) {
    super(props);
    this.state = {
      focused: false,
      toggleCliked: false,
    };
  }
  handleFocusBlur() {
    this.setState((state) => ({ focused: !this.state.focused }));
  }
  handleToggleClick() {
    this.setState((state) => ({
      toggleCliked: !this.state.toggleCliked,
    }));
  }
  render() {
    return (
      <div>
        <Affix offsetTop={0}>
          <Header>
            <Toggle
              onClick={this.handleToggleClick.bind(this)}
              clicked={this.state.toggleCliked}
            />
            <NormalContainer>
              <Logo>E A Z A</Logo>
              <SearchWrapper>
                <SearchBox toggled={this.state.toggleCliked} enterbutton />
              </SearchWrapper>
              <div>
                <NormalIntro>About</NormalIntro>
                <GithubLink></GithubLink>
              </div>
            </NormalContainer>
          </Header>
        </Affix>
        {this.state.toggleCliked && <ToggleBoard />}
      </div>
    );
  }
}

export default withRouter(MyHeader);
