import styled from 'styled-components';

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 100px 0px;

  @media (max-width: 780px) {
    padding: 50px 15px;
  }
`;

export const SectionHeader = styled.h1`
  &&& {
    text-align: center;
    color: ${({ theme }) => theme.primary2};
    margin: 0px 0px 60px;
    font-size: 2.5em;
  }
`;

export const SecondaryHeader = styled.h2`
  color: ${({ theme }) => theme.secondary1};
  text-align: center;
`;
