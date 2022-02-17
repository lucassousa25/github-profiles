import styled from "styled-components";

export const Wrapper = styled.div`
  padding: 0 10px;
  border-radius: 8px;
  margin: 0 20px;
  width: 100%;
  height: 200px;
  background: #2c5282;
  text-align: center;
  position: relative;
  transition: transform .3s;

  &:hover {
    transform: scale(1.1);
    background-color: #225ed8;
    box-shadow: 0 0 0.4em rgba(0, 0, 0, 0.4);
    cursor: pointer;
  }
`;

export const WrapperTitle = styled.h2`
  font-size: 20px;
  font-weight: bold;
  margin: 8px 5px;
  color: #fff;
  border-bottom: 1px solid #fff;
`;

export const WrapperDescription = styled.p`
  font-size: 12pt;
  color: #fff;
  font-style: italic;
`;

export const WrapperLink = styled.a`
  display: flex;
  width: 100%;
  margin: 20px 0;
`;

export const WrapperOthersInfo = styled.div`
  display: flex;
  border-top: 1px solid #fff;
  text-align: center;
  align-items: center;
  justify-content: center;
  position: absolute;
  bottom: 0;
  width: 90%;
  padding: 5px 0;

  span {
    color: #fff;
    margin: 0 5px;
    font-size: 11pt;
    font-weight: bold;
  }
`;