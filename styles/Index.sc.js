import styled from 'styled-components';

export const PageWrapper = styled.div`
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const Main = styled.main`
  padding: 0.5rem 0;
  display: flex;
  flex-wrap: wrap;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  align-content: center;
`;

export const Footer = styled.footer`
  position: sticky;
  bottom: 0;
  z-index: 100;
  width: 100%;
  height: 70px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: coral;
  padding: 2rem;
`;

export const FooterLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: bold;
  letter-spacing: 0.1rem;

  &:hover {
    text-decoration: underline 2px;
  }
`;