/*
 * @Author: Chengxu Bian
 * @Date: 2020-07-02 17:50:59
 * @Last Modified by:   Chengxu Bian
 * @Last Modified time: 2020-07-02 17:50:59
 */
import React, { Component } from "react";
import { Board, Intro, GithubLink } from "../common/header/style";
import SearchBox from "./searchBox";
import styled from "styled-components";

const Search = styled(SearchBox)`
  @media screen and (min-width: 900px) {
    display: none;
    height: 0px;
    width: 0px;
  }
`;
class ToggleBoard extends Component {
  render() {
    return (
      <Board>
        <Search />
        <Intro>About</Intro>
        <GithubLink></GithubLink>
      </Board>
    );
  }
}

export default ToggleBoard;
