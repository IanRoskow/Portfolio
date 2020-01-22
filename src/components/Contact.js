import React from 'react';
import {
  Container,
  SectionHeader,
  SecondaryHeader
} from './GlobalsStyledComponents';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

const FooterHeader = styled(SectionHeader)`
  &&& {
    margin-bottom: 0;
  }
`;

const SubTitle = styled(SecondaryHeader)`
  &&& {
    margin-top: 0;
  }
`;

const Email = styled(SecondaryHeader)`
  &&& {
    margin-top: 75px;
    margin-bottom: 25px;
  }
`;

const Icons = styled.div`
  display: flex;
  justify-content: space-evenly;
  max-width: 500px;
  margin: auto;
`;

const StyledButton = styled(Button)`
  &&& {
    color: ${props => props.theme.defaultText};
    background-color: ${props => props.theme.defaultBackground};
    border: 2px solid;
    border-color: ${props => props.theme.primary1};
    border-radius: 5px;

    &:hover {
      background-color: ${props => props.theme.primary1};
      color: ${props => props.theme.defaultBackground};
    }
    & > *:hover {
      background-color: inherit;
    }
  }
`;

const Link = styled.a`
  color: ${({ theme }) => theme.secondary1};
  &:hover {
    color: ${({ theme }) => theme.secondary1Highlight};
  }
`;

const Contact = () => {
  return (
    <Container>
      <FooterHeader>Contact Me</FooterHeader>
      <SubTitle>If you want to talk, reach me at:</SubTitle>
      <Email>
        <Link href='mailto:ianroskow@gmail.com'>ianroskow@gmail.com</Link>
      </Email>
      <Icons>
        <StyledButton
          aria-label='linked in profile'
          circular
          color='linkedin'
          icon='linkedin'
          onClick={() =>
            window.open(
              'https://www.linkedin.com/in/ian-roskow-5b1270a6/',
              'blank'
            )
          }
        />
        <StyledButton
          aria-label='git hub profile'
          circular
          color='black'
          icon='github'
          onClick={() => window.open('https://github.com/IanRoskow', 'blank')}
        />
        <StyledButton
          aria-label='stack overflow profile'
          circular
          color='orange'
          icon='stack overflow'
          onClick={() =>
            window.open(
              'https://stackoverflow.com/users/8345731/roskow',
              'blank'
            )
          }
        />
        <StyledButton
          aria-label='instagram profile'
          circular
          color='instagram'
          icon='instagram'
          onClick={() =>
            window.open('https://www.instagram.com/roskowcodes/', 'blank')
          }
        />
        <StyledButton
          aria-label='online resume'
          circular
          color='grey'
          icon='file alternate outline'
          onClick={() =>
            window.open(
              require('../assets/documents/IanRoskowResume.pdf'),
              'blank'
            )
          }
        />
      </Icons>
    </Container>
  );
};

export default Contact;
