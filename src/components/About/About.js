import React from 'react';
import styled from 'styled-components';
const Container = styled.div``;

const Header = styled.h1`
  text-align: center;
  color: ${({ theme }) => theme.primary1};
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 200px 400px 100px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 30px;
  & > * {
    background-color: teal;
  }
`;

const GridItem = styled.div`
  text-align: center;
`;

const ProfilePhoto = styled.div`
  grid-column: 1/3;
`;

const Stack = styled.div`
  grid-column: 3/5;
`;

const Connect = styled.div`
  grid-column: 1 / -1;
`;

const About = () => {
  return (
    <Container>
      <Header>About Me</Header>
      <Grid>
        <GridItem>
          <h1>Fast</h1>
        </GridItem>
        <GridItem>
          <h1>Responsive</h1>
        </GridItem>
        <GridItem>
          <h1>Intuitive</h1>
        </GridItem>
        <GridItem>
          <h1>Dynamic</h1>
        </GridItem>
        <ProfilePhoto>
          <div>Profile Photo</div>
          <div>Lorem Ipsum</div>
        </ProfilePhoto>
        <Stack>
          <h2>My Stack</h2>
          <div>
            <div className='stack'>
              Top Skills
              <small>
                HTML5 - CSS3 - Javascript - ReactJS - Redux - Babel - Git -
                Agile - Adobe XD
              </small>
            </div>
            <div className='stack'>
              Knowledgable
              <small>
                NodeJS - Express - MongoDB - JQuery - Bootstrap - SASS -
                Sharepoint
              </small>
            </div>
          </div>
        </Stack>
        <Connect>
          <div>
            <button
              onClick={() =>
                window.open(
                  require('../../assets/documents/IanRoskowResume.pdf'),
                  'blank'
                )
              }
            >
              Resume
            </button>
            <button
              onClick={() =>
                window.open(
                  'https://www.linkedin.com/in/ian-roskow-5b1270a6/',
                  'blank'
                )
              }
            >
              Linked In
            </button>
          </div>
        </Connect>
      </Grid>
    </Container>
  );
};

export default About;
