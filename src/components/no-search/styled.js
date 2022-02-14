import styled, {keyframes} from "styled-components";

const animateBackMove = keyframes`
  0% {
    transform: translate(0)
  }
  20% {
    transform: translate(-5px, 5px)
  }
  40% {
    transform: translate(-5px, -5px)
  }
  60% {
    transform: translate(5px, 5px)
  }
  80% {
    transform: translate(5px, -5px)
  }
  to {
    transform: translate(0)
  }
`;

export const WrapperTitle = styled.h1.attrs(() => ({
  'data-glitch': "GitHub Perfis"
}))`
text-align: center;
font-size: 50pt;
font-weight: bold;
position: relative;

&:before, &:after {
  position: absolute;
  content: attr(data-glitch);
  top: 0;
  left: 0;
  opacity: .8;
} &:after {
  color: #0f0;
  z-index: -2;
} &:before {
  color: #f0f;
  z-index: -1;
}
&:hover {
  &:before {
    // eslint-disable-next-line no-use-before-define
    animation: ${animateBackMove} .3s cubic-bezier(.25, .46, .45, .94) both infinite
  }
  &:after {
    // eslint-disable-next-line no-use-before-define
    animation: ${animateBackMove} .3s cubic-bezier(.25, .46, .45, .94) reverse both infinite
  }
}
`;

export const Wrapper = styled.div`

p {
  text-align: center;
  font-size: 20pt;
  font-style: italic;
  color: #fff;
  text-shadow: 0 0 0.3em rgba(0, 0, 0, 0.5);
}
  
  Header {
    margin-top: 10px;
    width: 40%;
    border: 1px solid #fff;
    box-shadow: 0 0 0.3em rgba(0, 0, 0, 0.3);
    border-radius: 40px;
    background: #fff;
    justify-content: none;
    flex-direction: column;
  }
  
  input {
    border: none;
    box-shadow: none;
    padding: 0 15px;
    width: 100%;
    height: 44px;
    
    &:focus {
      outline: none;
    }
  }
  
  button {
    background-color: #225ed8;
    padding: 2px 16px;
    margin: 0 12px;
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