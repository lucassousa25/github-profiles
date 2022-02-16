import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 10px;
  border-radius: 8px;
  margin: 0 20px;
  width: 100%;
  height: 200px;
  background: #888;
  text-align: center;
  position: relative;
`;

export const WrapperTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 8px 5px;
  color: #fff;
  border-bottom: 1px solid #fff;
`;

export const WrapperDescription = styled.p`
  font-size: 11pt;
  color: #fff;
  font-style: italic;
`;

export const WrapperLink = styled.a`
  font-size: 16px;
  font-weight: bold;
  margin: 8px 0;
  color: #2c5282;
`;

export const WrapperOthersInfo = styled.div`
  border-top: 1px solid #fff;
  text-align: center;
  align-items: center;
  position: absolute;
  bottom: 0;
  width: 90%;
  padding: 5px 0;

  span {
    color: #fff;
    margin: 0 5px;
    font-size: 13pt;
  }
`;