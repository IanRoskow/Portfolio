import React, { useState } from 'react';
import styled from 'styled-components';
import { Icon, Visibility } from 'semantic-ui-react';
import { Container, AnimatedHeader } from './GlobalsStyledComponents';

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

  & > h1 {
    transition: opacity 500ms ease ${props => props.delay};
    opacity: ${props => (props.topVisible ? '1' : '0')};
  }

  & > p {
    transition: opacity 500ms ease 1.5s;
    opacity: ${props => (props.topVisible ? '1' : '0')};
  }

  @media (min-width: 769px) {
    grid-row: 1/2;
  }
`;

const Wrapper = styled.div`
  transition: transform 500ms ease-out ${props => props.delay},
    opacity 500ms ease ${props => props.delay};
  transform: ${props => (props.topVisible ? 'rotate(0)' : 'rotate(-45deg)')};
  opacity: ${props => (props.topVisible ? '1' : '0')};
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
  transition: transform 500ms ease, opacity 500ms ease;
  transform: ${props =>
    props.topVisible ? 'translate(0, 0)' : 'translate(-500px, 0)'};
  opacity: ${props => (props.topVisible ? '1' : '0')};

  @media (max-width: 768px) {
    grid-column: 1/-1;
  }
`;

const Stack = styled.div`
  grid-column: 3/5;
  text-align: center;
  transition: transform 500ms ease, opacity 500ms ease;
  transform: ${props =>
    props.topVisible ? 'translate(0, 0)' : 'translate(500px, 0)'};
  opacity: ${props => (props.topVisible ? '1' : '0')};

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
    expertSkills = props.expert.map((el, i) => (
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
  const [topVisible, setTopVisible] = useState(false);
  const [picVisible, setPicVisible] = useState(false);

  const handleUpdate = (e, { calculations }) => {
    setTopVisible(calculations.onScreen);
  };

  return (
    <Visibility
      onOnScreen={(e, { calculations }) => {
        setTopVisible(calculations.onScreen);
      }}
      onTopPassed={(e, { calculations }) => {
        setPicVisible(calculations.topPassed);
      }}
      offset={[-50, -50]}
    >
      <Container>
        <AnimatedHeader topVisible={topVisible}>About Me</AnimatedHeader>
        <Grid>
          <ProfilePhoto topVisible={picVisible}>
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
          <Stack topVisible={picVisible}>
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
          <GridItem topVisible={topVisible} delay={'200ms'}>
            <Wrapper topVisible={topVisible} delay={'200ms'}>
              <StyledIcon bordered inverted size='huge' name='stopwatch' />
            </Wrapper>
            <IconTitle>Fast</IconTitle>
            <p>
              Quick page load times, lag free interaction, and user content
              first.
            </p>
          </GridItem>
          <GridItem topVisible={topVisible} delay={'400ms'}>
            <Wrapper topVisible={topVisible} delay={'400ms'}>
              <StyledIcon
                bordered
                inverted
                size='huge'
                name='mobile alternate'
              />
            </Wrapper>
            <IconTitle>Responsive</IconTitle>
            <p>
              Websites look great on any screen size, no device is an after
              thought.
            </p>
          </GridItem>
          <GridItem topVisible={topVisible} delay={'600ms'}>
            <Wrapper topVisible={topVisible} delay={'600ms'}>
              <StyledIcon
                bordered
                inverted
                size='huge'
                name='thumbs up outline'
              />
            </Wrapper>
            <IconTitle>User Friendly</IconTitle>
            <p>Easy to use and intuitive pages built on UX/UI principles.</p>
          </GridItem>
          <GridItem topVisible={topVisible} delay={'800ms'}>
            <Wrapper topVisible={topVisible} delay={'800ms'}>
              <StyledIcon bordered inverted size='huge' name='cog' />
            </Wrapper>
            <IconTitle>Dynamic</IconTitle>
            <p>Improving user experience by making webpages come to life.</p>
          </GridItem>
        </Grid>
      </Container>
    </Visibility>
  );
};

export default About;
