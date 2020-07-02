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
  height: 100%;
  width: 60%;
  @media screen and (max-width: 1100px) {
    width: 100%;
  }
`;
export const TextDisplay = styled.div`
  height: 100%;
  width: 40%;
  @media screen and (max-width: 1100px) {
    width: 0px;
    height: 0px;
    visibility: hidden;
  }
`;
export const MobileText = styled.h1`
  font-size: 0px;
  @media screen and (max-width: 1100px) {
    font-size: 2rem;
    margin: 0.5rem auto;
  }
`;
export const ContentBox = styled.div``;
