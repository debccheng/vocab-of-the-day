import styled from 'styled-components';

export const VocabCardWrapper = styled.div`
  height: 402px;
  width: 402px;
  margin: 1rem;
  border: 1px solid black;

  @media (max-width: 400px) {
    height: 100%;
    width: 100%;
    margin: 0.25rem
  }
`;

export const VocabCardStyled = styled.div`
  height: 400px;
  width: 400px;
  @media (max-width: 400px) {
    height: 100%;
    width: 100%;
  }
`;
