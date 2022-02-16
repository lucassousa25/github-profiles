import styled from "styled-components";

export const Wrapper = styled.div`
  background: linear-gradient(45deg, rgba(70,255,255,1) 0%, rgba(0,212,255,1) 27%, rgba(9,9,121,1) 100%);
  padding: 20px;
  text-align: -webkit-center;
  
  section {
    display: flex;
    padding: 5px 10px;
    justify-content: center;
    background: rgba(255,255,255,0.55);
    box-shadow: 0 8px 32px 0 rgba(1,1,1,0.3);
    backdrop-filter: blur( 8px );
    background-size: cover;
    width: max-content;
    border-radius: 30px;
  }
`;

export const WrapperInfoUser = styled.div`
  flex-direction: column;
  align-items: flex-start;
  margin-left: 10px;
  
  h1 {
    font-size: 32px;
    font-weight: bold;
  }
  h3 {
    font-size: 18px;
    font-weight: bold;
  }
  h3 > span {
    font-size: 16px;
    font-weight: normal;
    font-style: italic;
  }
  `;
  
  export const WrapperStatusCount = styled.div`
  display: flex;
  align-items: center;
  h4 {
    font-size: 16px;
    font-weight: bold;
  }
  div {
    margin: 10px;
    text-align: center;
  }
  background: #2c5282;
  color: #fff;
  border-radius: 25px;
  `;
  
export const WrapperUserGeneric = styled.div`
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
  box-shadow: 0 0 0.4em rgba(0, 0, 0, 0.4);
`;