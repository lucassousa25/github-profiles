import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
  background: #fff;
  padding: 10px;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 200px;
  margin-left: 10px;
  
  h1 {
    font-size: 32px;
    font-weight: bold;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  h4 {
    font-size: 16px;
    font-weight: bold;
  }
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 10px;
    text-align: center;
  }
  background: #2c5282;
  color: #fff;
  border-radius: 25px;
`;

export const WrapperUserGeneric = styled.div`
  display: flex;
  align-items: center;
  margin: 7px 0;
  a {
    color: blue;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 200px;
  margin: 10px;
  box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.3);
`;