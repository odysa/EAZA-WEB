import styled from "styled-components";
import Search from "../../component/searchBox";
import { NavLink as _NavLink } from "react-router-dom";

export const Logo = styled.a`
  color: #c41d7f;
  font-size: 30px;
  :hover {
    color: #c41d7f;
  }
`;
//Link style
export const MyLink = styled.a`
  color: #7f7f7f;
  :hover {
    color: #7f7f7f;
    text-decoration: none;
  }
`;

export const SearchWrapper = styled.div`
  .ant-input-suffix {
    color: #7f7f7f;
    &.focused {
      color: #231721;
    }
  }
  .normal {
    width: 110px;
    box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.1), 0 0 0.2rem rgba(0, 0, 0, 0.1);
    border-radius: 19px;
    border: none;
    outline: none;
    &.focused {
      width: 280px;
      box-shadow: 0 0 0.3rem rgba(0, 0, 0, 0.2), 0 0 0.3rem rgba(0, 0, 0, 0.2);
    }
  }
  input::placeholder {
    color: #7f7f7f;
    font-size: 15px;
  }
`;

export const HeadWrapper = styled.div`
  background: white;
  box-shadow: 0 0 0.2rem rgba(0, 0, 0, 0.2), 0 0.2rem 0.4rem rgba(0, 0, 0, 0.3);
  position: relative;
  z-index: 200;
`;

export const SearchBox = styled(Search)`
  .slide-enter {
    transition: all 1s ease-out;
  }
  .slide-enter-done {
    width: 200px;
  }
  .slide-exit {
    transition: all 1s ease-out;
  }
  .slide-exit-done {
    width: 80px;
  }
`;
export const NavLink = styled(_NavLink)`
  color: #7f7f7f;
  :hover {
    color: #7f7f7f;
    text-decoration: none;
  }
`;
