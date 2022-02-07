import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  justify-content: space-between;
  padding: 5px;

  input {
    border: 1px solid #ccc;
    border-radius: 8px;
    width: 100%;
    height: 44px;
    padding: 5px;
    box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.3);
  }

  button {
    background-color: #225ed8;
    padding: 8px 16px;
    margin: 0 12px;
    border-radius: 8px;

    &:hover {
      background-color: #2c5282;
    }

    span {
      font-weight: bold;
      color: #fff;
    }
  }
`;