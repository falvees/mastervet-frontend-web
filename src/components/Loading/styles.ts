import styled, { css } from 'styled-components';

export function createCSS() {
  let styles = '';

  for (let i = 1; i < 29; i += 1) {
    styles += `
      #sparkles > path:nth-child(#{${i}}) {
        animation-delay: (35ms * ${i});
      }
     `;
  }
  return css`
    ${styles}
  `;
}

export const Container = styled.div`
  #sparkles > path {
    animation: sparklyBits 1000ms infinite;
    position: absolute;
  }

  #message {
    margin-top: 20px;
    text-align: center;
  }

  ${createCSS()};

  /* @for $i from 1 through 29 {
    #sparkles > path:nth-child(#{$i}) {
      animation-delay: (35ms * $i);
    }
  } */

  @keyframes sparklyBits {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  // Boring Bit
  body {
    align-items: center;
    background-color: #fafafa;
    display: flex;
    height: 100vh;
    justify-content: center;
    width: 100vw;
  }
`;
