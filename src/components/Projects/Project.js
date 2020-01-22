import React, { useState } from 'react';
import styled from 'styled-components';
import { SecondaryHeader } from '../GlobalsStyledComponents';
import Button from '../Button';
import { Visibility } from 'semantic-ui-react';

const StyledProject = styled.div`
  padding: 20px 0px 100px;

  & > h2 {
    transition: transform 1300ms ease, opacity 1000ms ease;
    transform: ${props =>
      props.topVisible ? 'translate(0, 0)' : 'translate(-300px, 0)'};
    opacity: ${props => (props.topVisible ? '1' : '0')};
  }
  & > div > div:first-child {
    transition: transform 500ms ease 500ms, opacity 500ms ease 500ms;
    transform: ${props =>
      props.topVisible
        ? 'translate(0, 0)'
        : props.position
        ? 'translate(300px, 0)'
        : 'translate(-300px, 0)'};
    opacity: ${props => (props.topVisible ? '1' : '0')};
  }
  & > div > div:last-child {
    transition: transform 500ms ease 500ms, opacity 500ms ease 500ms;
    transform: ${props =>
      props.topVisible
        ? 'translate(0, 0)'
        : props.position
        ? 'translate(-300px, 0)'
        : 'translate(300px, 0)'};
    opacity: ${props => (props.topVisible ? '1' : '0')};
  }

  @media (max-width: 768px) {
    & > h2 {
      transform: translate(0, 0);
      opacity: 1;
    }
    & > div > div:first-child {
      transform: translate(0, 0);
      opacity: 1;
    }
    & > div > div:last-child {
      transform: translate(0, 0);
      opacity: 1;
    }
  }
`;

const ProjectFlex = styled.div`
  display: flex;
  flex-direction: ${props => props.flexDirection};
  align-items: center;

  @media (max-width: 780px) {
    flex-direction: column;
  }
`;

const ProjectImage = styled.div`
  flex: 1 1 50%;
  text-align: center;
  padding: 20px;

  & > img {
    max-width: 100%;
    box-shadow: 0 3px 6px 2px ${({ theme }) => theme.boxShadow};
  }
`;

const ProjectDetails = styled.div`
  flex: 1 1 50%;
  padding: 20px;

  @media (max-width: 780px) {
    text-align: center;
  }
`;

const ButtonContainer = styled.div`
  padding: 15px 0px;
  &&&&& > button {
    margin-right: 20px;
  }

  @media (max-width: 780px) {
    display: flex;
    justify-content: space-evenly;
  }
`;

const Stack = styled.p`
  font-weight: bold;
`;

const Disclaimer = styled.p`
  color: ${({ theme }) => theme.primary2};
`;

const ProjectList = props => {
  const [topVisible, setTopVisible] = useState(false);

  let flexDirection = props.project.key % 2 ? 'row-reverse' : 'row';

  let bottomSection = null;
  if (props.project.demo || props.project.demo) {
    bottomSection = (
      <ButtonContainer>
        <Button
          primary
          onClick={() => window.open(`${props.project.demo}`)}
          Text='Visit'
          Icon='paper plane outline'
        />
        <Button
          onClick={() => window.open(`${props.project.source}`)}
          Text='Source Code'
          Icon='github'
        />
      </ButtonContainer>
    );
  } else {
    bottomSection = <Disclaimer>{props.project.disclaimer}</Disclaimer>;
  }

  return (
    <Visibility
      onTopPassed={(e, { calculations }) => {
        setTopVisible(calculations.topPassed);
      }}
      offset={[600, 600]}
    >
      <StyledProject topVisible={topVisible} position={props.project.key % 2}>
        <SecondaryHeader>{props.project.title}</SecondaryHeader>
        <ProjectFlex flexDirection={flexDirection}>
          <ProjectImage className='image'>
            <img src={props.project.image} alt={props.project.title} />
          </ProjectImage>
          <ProjectDetails className='details'>
            <p>{props.project.summary}</p>
            <Stack>{props.project.stack}</Stack>
            {bottomSection}
          </ProjectDetails>
        </ProjectFlex>
      </StyledProject>
    </Visibility>
  );
};

export default ProjectList;
