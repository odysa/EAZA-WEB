import styled from "styled-components";
import Search from "../../component/searchBox";
export const Logo = styled.a.attrs({
  href: "/"
})`
  color: #c41d7f;
  font-size: 30px;
  :hover {
    color: #c41d7f;
  }
`;

export const SearchWrapper = styled.div`
  .icon {
    cursor: pointer;
    border-radius: 19px;
    font-size: 20px;
    color: #7f7f7f;
    &.focused {
      color: #231721;
    }
  }
  .normal {
    width: 110px;
    box-shadow: 0 0 .2rem rgba(0,0,0,.1), 0 0 .2rem  rgba(0,0,0,.1);
    border-radius: 19px;
    border: none;
    outline: none;
    &.focused {
      width: 280px;
      box-shadow: 0 0 .3rem rgba(0,0,0,.2), 0 0 .3rem rgba(0,0,0,.2);
    }
  }
  input::placeholder {
    color: #7f7f7f;
    font-size: 15px;
  }
`;

export const HeadWrapper = styled.div`
  background: white;
  box-shadow: 0 0 0.2rem rgba(0,0,0,.2), 0 0.2rem 0.4rem rgba(0,0,0,.3);
  position: relative;
  z-index: 100;
  
`;
//box-shadow: 0 0 0.2rem rgba(0,0,0,.1), 0 0.2rem 0.4rem rgba(0,0,0,.2);
//box - shadow: 0 1rem 2rem rgba(0, 0, 0, 0.1);
export const SearchBox = styled(Search).attrs({
  size: "large"
})`
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
