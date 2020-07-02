/*
 * @Author: Chengxu Bian
 * @Date: 2020-07-01 18:09:44
 * @Last Modified by: Chengxu Bian
 * @Last Modified time: 2020-07-02 17:51:17
 */
import gitImage from "./git.svg";
import toggleImage from "./toggle.svg";
import styled from "styled-components";
import { Input, List } from "antd";
const { Search } = Input;

export const Header = styled.div`
  height: 4rem;
  background: white;
  position: relative;
  z-index: 10;
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.1), 0 0.2rem 0.4rem rgba(0, 0, 0, 0.2);
`;
export const NormalContainer = styled.div`
  width: 80%;
  height: 100%;
  margin: 0 auto;
  display: -webkit-flex;
  display: flex;
  justify-content: space-around;
  flex-direction: row;
  @media screen and (max-width: 900px) {
    justify-content: center;
  }
`;
export const Logo = styled.a.attrs({
  href: "#",
})`
  display: inline-block;
  text-decoration: none;
  font-size: 2.5rem;
  line-height: 4rem;
  color: rgb(192, 57, 43);
  :hover {
    text-decoration: none;
    color: rgb(192, 57, 43);
  }
`;
export const Intro = styled.a.attrs({
  href: "/intro/intro.html",
})`
  display: inline-block;
  text-decoration: none;
  font-size: 1.5rem;
  line-height: 3rem;
  color: black;
  :hover {
    text-decoration: none;
    color: black;
  }
`;
export const NormalIntro = styled(Intro)`
  line-height: 4rem;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
export const GithubLink = styled.a.attrs({
  href: "https://github.com/cbian03/EAZA-WEB",
})`
  display: inline-block;
  height: 2.5rem;
  width: 2.3rem;
  background: url('${gitImage}') no-repeat;

`;
export const NormalGithubLink = styled(GithubLink)`
  position: relative;
  top: 0.75rem;
  margin-left: 1.5rem;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
export const SearchWrapper = styled.div`
  width: 300px;
  height: 50%;
  position: relative;
  top: 25%;
  @media screen and (max-width: 900px) {
    display: none;
  }
`;
export const SearchBox = styled(Search)`
  border-radius: 8px;
  width: 300px;
  height: 100%;
`;

export const MyList = styled(List)`
  position: relative;
  z-index: 2;
  background: white;
  border-radius: 10px;
  opacity: 0.93;
  box-shadow: 0 0 0.1rem rgba(0, 0, 0, 0.2), 0 0 0.2rem rgba(0, 0, 0, 0.2);
`;
export const ListItem = styled.div`
  text-decoration: none;
`;
export const Toggle = styled.div`
  @media screen and (min-width: 900px) {
      dispaly:none;
      visibility:hidden;
      height:0px;
      width:0px;
  }
    height:1.5rem;
    width:1.5rem;
    float:left;
    position:relative;
    top:1.25rem;
    left:1.5%;
    background: url("${toggleImage}");
    cursor:pointer;
    transform: ${(props) => (props.clicked ? "rotate(90deg)" : "none")};
    transition: all 0.5s ease;
`;
export const Board = styled.div`
  height: 10rem;
  background-color: rgba(0, 0, 0, 0.1);
  display: flex;
  justify-content: space-around;
  flex-direction: column;
  align-items: center;
  @media screen and (min-width: 900px) {
    display: none;
    height: 0px;
    width: 0px;
  }
`;
export const ToggleSearchBox = styled(Search)`
  border-radius: 8px;
  width: 80%;
  height: 2rem;
  transition: all 0.5 ease;
  @media screen and (min-width: 900px) {
    display: none;
    height: 0px;
    width: 0px;
  }
`;
