import React from 'react';
import styled from 'styled-components';
import { Icon } from 'semantic-ui-react';
import { Container, SectionHeader } from './GlobalsStyledComponents';

const Header = styled.h1`
  &&& {
    text-align: center;
    color: ${({ theme }) => theme.primary1};
    margin: 0px 0px 20px;
  }
`;

const IconTitle = styled.h1`
  text-align: center;
  margin: 5px;
`;

const Grid = styled.div`
  display: grid;
  grid-template-rows: 200px 400px;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 40px 20px;

  @media (max-width: 768px) {
    grid-template-rows: auto;
    grid-template-columns: repeat(2, 1fr);
  }
`;

const GridItem = styled.div`
  text-align: center;
  @media (min-width: 769px) {
    grid-row: 1/2;
  }
`;

const StyledIcon = styled(Icon)`
  &&&&& {
    background-color: ${({ theme }) => theme.secondary1} !important;
    width: 1.5em;
    height: 1.5em;
    padding: 0.25em 0 !important;
    border-radius: 5px;
  }
`;

const ProfilePhoto = styled.div`
  grid-column: 1/3;
  text-align: center;

  @media (max-width: 768px) {
    grid-column: 1/-1;
  }
`;

const Stack = styled.div`
  grid-column: 3/5;
  text-align: center;
  @media (max-width: 768px) {
    grid-column: 1/-1;
  }
`;

const StyledRow = styled.span`
  color: ${props =>
    props.primary ? props.theme.primary2 : props.theme.secondary1};
  padding: 5px;
  font-weight: bold;
`;

const StackRow = props => {
  const Row = styled.div`
    margin-bottom: 15px;
  `;

  let expertSkills = [],
    knowledgableSkills = [];

  if (props.expert)
    expertSkills = props.expert.map(el => (
      <StyledRow key={el} primary>
        {el}
      </StyledRow>
    ));

  if (props.knowledgable)
    knowledgableSkills = props.knowledgable.map(el => (
      <StyledRow key={el}>{el}</StyledRow>
    ));
  return (
    <Row>
      {expertSkills}
      {knowledgableSkills}
    </Row>
  );
};

const About = () => {
  return (
    <Container>
      <SectionHeader>About Me</SectionHeader>
      <Grid>
        <ProfilePhoto>
          <img
            style={{ width: '50%', borderRadius: '5%' }}
            src={require('../assets/images/ProfilePhoto.jpeg')}
            alt='There should be a nice here.'
          />
          <p style={{ padding: '10px' }}>
            Highly skilled front-end developer proven by the implementation of
            multiple web solutions with 1,000s of active daily users for large
            corporate companies. His work ethic, unique skillset, and proven
            track record of exceeding client exceptions has made him a desired
            project team member by many of his peers and managers.
          </p>
        </ProfilePhoto>
        <Stack>
          <Header>My Stack</Header>
          <StackRow expert={['HTML5']} />
          <StackRow
            expert={['CSS3', 'Styled Components', 'Semantic UI']}
            knowledgable={['SASS', 'Bootstrap']}
          />
          <StackRow expert={['JavaScript', 'React', 'Redux', 'jQuery']} />
          <StackRow knowledgable={['NodeJS', 'Express', 'C#']} />
          <StackRow knowledgable={['MongoDB', 'SQL']} />
          <StackRow expert={['Git', 'VS Code', 'AdobeSuite']} />
          <StackRow
            expert={['SharePoint', 'Agile', 'BEM']}
            knowledgable={['WordPress']}
          />
          <br />
          <br />
          <div>
            <StyledRow primary>
              <i>-Proficient-</i>
            </StyledRow>
            <StyledRow>
              <i>-Knowledgable-</i>
            </StyledRow>
          </div>
        </Stack>
        <GridItem>
          <StyledIcon bordered inverted size='huge' name='stopwatch' />
          <IconTitle>Fast</IconTitle>
          <p>
            Quick page load times, lag free interaction, and user content first.
          </p>
        </GridItem>
        <GridItem>
          <StyledIcon bordered inverted size='huge' name='mobile alternate' />
          <IconTitle>Responsive</IconTitle>
          <p>
            Websites look great on any screen size, no device is an after
            thought.
          </p>
        </GridItem>
        <GridItem>
          <StyledIcon bordered inverted size='huge' name='thumbs up outline' />
          <IconTitle>User Friendly</IconTitle>
          <p>Easy to use and intuitive pages built on UX/UI principles.</p>
        </GridItem>
        <GridItem>
          <StyledIcon bordered inverted size='huge' name='cog' />
          <IconTitle>Dynamic</IconTitle>
          <p>Improving user experience by making webpages come to life.</p>
        </GridItem>
      </Grid>
    </Container>
  );
};

export default About;
