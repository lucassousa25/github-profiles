import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 10px 0 10px 0;

  justify-content: center;
  flex-direction: inline;
  
  input {
    border: 1px solid #ccc;
    border-radius: 22px;
    width: 50%;
    height: 44px;
    padding: 5px 5px 5px 10px;
    box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.3);

    &:focus {
      outline: none;
    }
  }

  button {
    background-color: #225ed8;
    padding: 8px 16px;
    margin: 0 12px;
    border-radius: 8px;
    border: none;

    &:hover {
      background-color: #2c5282;
    }

    span {
      font-weight: bold;
      color: #fff;
    }
  }
`;