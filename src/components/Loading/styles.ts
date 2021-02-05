import styled, { css } from 'styled-components';

export interface LoadingProps {
  isLoading: Boolean;
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

export const Container = styled.div<LoadingProps>`
  display: ${props => (props.isLoading ? 'flex' : 'none')};
  align-items: center;
  background-color: #fafafa;
  height: 100vh;
  justify-content: center;
  width: 100vw;
  flex-direction: column;
  position: absolute;
  z-index: 20;
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
