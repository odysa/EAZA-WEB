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
    cursor: "pointer";
    border-radius: 19px;
    font-size: 15px;
    color: #7f7f7f;
    &.focused {
      color: #231721;
    }
  }
  .normal {
    background-color: "#595959";
    width: 80px;
    border-radius: 19px;
    border: none;
    outline: none;
    &.focused {
      font-color: red;
      width: 200px;
    }
  }
  input::placeholder {
    color: #7f7f7f;
    font-size: 10px;
  }
`;

export const HeadWrapper = styled.div`
  background: #546e7a;
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
