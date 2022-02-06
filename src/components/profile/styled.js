import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: flex-start;
`;

export const WrapperInfoUser = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: auto;
  margin-left: 10px;
`;

export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  div {
    margin: 10px;
    text-align: center;
  }
`;

export const WrapperUsername = styled.div`
  display: flex;
  align-items: center;
  span {
    margin-left: 10px;
  }
`;

export const WrapperImage = styled.img`
  border-radius: 50%;
  width: 15%;
  margin: 10px;
`;