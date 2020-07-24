/*
 * @Author: Chengxu Bian
 * @Date: 2020-07-02 17:54:32
 * @Last Modified by:   Chengxu Bian
 * @Last Modified time: 2020-07-02 17:54:32
 */
import styled from "styled-components";
import { Button } from "react-bootstrap";

export const ButtonCustom = styled(Button)`
  background-color: #c41d7f;
  border-color: #c41d7f;
  outline: none;
  :active {
    background-color: #c41d7f;
    border-color: #c41d7f;
  }
  :hover {
    background-color: #c41d7f;
    border-color: #c41d7f;
  }
  :focus {
    background-color: #c41d7f;
    border-color: #c41d7f;
    box-shadow: none;
  }
`;

export const DisplayContent = styled.div`
  height: 30rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin: 3rem auto;
  @media screen and (max-width: 1100px) {
    width: 100%;
    height: 25rem;
  }
`;
export const ImageDisplay = styled.div`
  width: 60%;
  @media screen and (max-width: 1100px) {
    width: 90%;
  }
  @media screen and (max-width: 750px) {
    width: 100%;
  }
`;
export const TextDisplay = styled.div`
  height: 100%;
  width: 40%;
  @media screen and (max-width: 1100px) {
    display: none;
    visibility: hidden;
  }
`;
export const MobileText = styled.h3`
  display: none;
  @media screen and (max-width: 1100px) {
    display: block;
    margin: 0.6rem auto;
  }
`;
export const ContentBox = styled.div`
  width: 1440px;
  margin: 0 auto;
  padding: 0 1.5rem;
  @media screen and (max-width: 1440px) {
    width: 100%;
  }
  @media screen and (max-width: 450px) {
    padding: 0 0;
  }
`;
export const AboutWrapper = styled.div`
  width:1440px;
  margin: 0 auto;
  @media screen and (max-width: 1440px) {
    width:100%;
  }
`;
