import styled, { css } from 'styled-components';

export interface LoadingProps {
  isLoading?: Boolean;
  background?: string;
  width?: string;
  height?: string;
  full?: boolean;
}
export function createCSS() {
  let styles = '';

  for (let i = 1; i < 30; i += 1) {
    styles += `
      #sparkles > path:nth-child(${i}) {
        animation-delay: calc(35ms * ${i});
      }
     `;
  }
  return css`
    ${styles}
  `;
}
export const Content = styled.div<LoadingProps>`
  display: flex;
  flex-direction: column;
  padding: 20px;
  background-color: ${props => (props.background ? props.background : '#fff')};
  border: ${props => (props.full ? 0 : '2px solid #17a0ae')};
  border-radius: 10px;
  height: ${props => (props.height ? props.height : 'auto')};
  width: ${props => (props.width ? props.width : 'auto')};
  animation-duration: 1.2s;
  animation-name: pulse;
  animation-iteration-count: infinite;
  @keyframes pulse {
    to {
      border-color: transparent;
    }
    from {
      border-color: #17a0ae;
    }
    /* 25% {
      border-top-color: transparent;
      border-left-color: #17a0ae;
    }

    50% {
      border-right-color: transparent;
      border-top-color: #17a0ae;
    }
    75% {
      border-bottom-color: transparent;
      border-right-color: #17a0ae;
    }
    100% {
      border-left-color: transparent;
      border-bottom-color: #17a0ae;
    } */
  }
`;
export const Container = styled.div<LoadingProps>`
  display: ${props => (props.isLoading ? 'flex' : 'none')};
  background-color: ${props => (props.full ? '#fff' : props.background)};
  align-items: center;
  word-break: break-word;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  z-index: 20;
  width: 100vw;
  height: 100vh;

  .loading-container {
    position: relative;
    & > img {
      height: 60px;
      position: absolute;
      top: 30%;
      left: 35%;
    }
  }

  #sparkles > path {
    animation: sparklyBits 1000ms infinite;
    position: absolute;
    fill: #17a0ae;
  }

  #message {
    margin-top: 20px;
    text-align: center;
  }

  ${createCSS()};

  @keyframes sparklyBits {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;
