import styled from 'styled-components';
import { Carousel } from 'react-responsive-carousel';

export const VocabCardWrapper = styled.div`
  margin: 1rem;
  border: 1px solid black;

  @media (max-width: 400px) {
    height: 100%;
    width: 100%;
    margin: 0.25rem
  }
`;

export const VocabCardStyled = styled.div`
  background-color: whitesmoke;
  width: 400px;
  @media (max-width: 400px) {
    height: 100%;
    width: 100%;
  }
`;

export const ImageWrapper = styled.div`
  height: 400px;
`;

export const TextSection = styled.div`
  border-top: 1px solid black;
  padding: 0.4rem;
`;

export const Heading = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
  border-bottom: 1px solid gray;
  padding-bottom: 0.4rem;
  margin-bottom: 0.4rem;
`;

export const PostInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-evenly;
  height: 100%;
`;

export const Title = styled.div`
  font-size: 1.5rem;
  font-weight: bold;
`;

export const Date = styled.div`
  font-size: 0.8rem;
  font-weight: bold;
`;

export const Author = styled.div`
  font-size: 0.6rem;
`;

export const InteractiveSection = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-end;
`;

export const StatsSection = styled.div`
  display: flex;
  flex-direction: column;
`;

export const Stats = styled.div`
  font-size: 0.8rem;
`;

export const RedditLink = styled.a`
  text-transform: uppercase;
  background-color: black;
  color: white;
  font-size: 0.6rem;
  padding: 0.4rem;
  border: 1px solid black;

  &:hover {
    text-decoration: underline 1px;
  }
`;
