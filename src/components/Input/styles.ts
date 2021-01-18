import styled from 'styled-components';

export const Container = styled.div`
  background: transparent;
  border-radius: 10px;
  border: 2px solid #bfbfbf;
  padding: 16px;
  width: 100%;
  color: #bfbfbf;

  display: flex;
  align-items: center;

  & + div {
    margin-top: 8px;
  }
  input {
    flex: 1;
    background: transparent;
    border: 0;
    color: #9d9d9c;

    &::placeholder {
      color: #bfbfbf;
    }
  }
  svg {
    margin-right: 16px;
  }
`;
