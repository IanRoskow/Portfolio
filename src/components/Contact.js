import React from 'react';
import {
  Container,
  SectionHeader,
  SecondaryHeader
} from './GlobalsStyledComponents';
import { Button } from 'semantic-ui-react';
import styled from 'styled-components';

const Icons = styled.div`
  display: flex;
  justify-content: space-evenly;
  margin: 50px 0;
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
      <SectionHeader>Contact Me</SectionHeader>
      <SecondaryHeader>
        <Link href='mailto:ianroskow@gmail.com'>ianroskow@gmail.com</Link>
      </SecondaryHeader>
      <Icons>
        <Button
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
        <Button
          circular
          color='black'
          icon='github'
          onClick={() => window.open('https://github.com/IanRoskow', 'blank')}
        />
        <Button
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
        <Button
          circular
          color='instagram'
          icon='instagram'
          onClick={() =>
            window.open('https://www.instagram.com/ianroskow/', 'blank')
          }
        />
        <Button
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
