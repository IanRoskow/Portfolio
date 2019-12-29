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
    font-size: 2em;
  }
`;

export const AnimatedHeader = styled(SectionHeader)`
  transition: transform 1300ms ease 200ms, opacity 1000ms ease 200ms;
  transform: ${props =>
    props.topVisible ? 'translate(0, 0)' : 'translate(-300px, 0)'};
  opacity: ${props => (props.topVisible ? '1' : '0')};
`;

export const SecondaryHeader = styled.h2`
  color: ${({ theme }) => theme.secondary1};
  text-align: center;
`;
