import styled from "styled-components";

export const Wrapper = styled.div`

  h1 {
    text-align: center;
    font-size: 45pt;
    font-weight: bold;
  }

  p {
    text-align: center;
    font-size: 20pt;
    font-style: italic;
    color: #aaa;
  }
  
  Header {
    margin-top: 10px;
    width: 40%;
    border: 2px solid #ccc;
    box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.3);
    border-radius: 40px;
  }
  
  input {
    border: none;
    box-shadow: none;
    height: 60px;
    padding: 0 15px;

    &:focus {
      outline: none;
    }
  }

  button {
    background-color: #225ed8;
    padding: 8px 16px;
    margin: 0 16px;
    border-radius: 100px;
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

export const WrapperAlign = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
