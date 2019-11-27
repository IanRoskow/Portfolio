import React from 'react';
import styled from 'styled-components';
import { SecondaryHeader } from './StyledComponents/GlobalsStyles';
import Button from './Button';

const StyledProject = styled.div`
  padding: 20px 0px 100px;
`;

const ProjectImage = styled.div`
  flex: 1 1 50%;
  text-align: center;
  padding: 20px;

  & > img {
    max-width: 100%;
    box-shadow: 0 3px 6px 2px grey;
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
  color: ${({ theme }) => theme.primary1};
`;

const ProjectList = props => {
  let flexDirection = props.project.key % 2 ? 'row-reverse' : 'row';
  const ProjectFlex = styled.div`
    display: flex;
    flex-direction: ${flexDirection};
    align-items: center;

    @media (max-width: 780px) {
      flex-direction: column;
    }
  `;

  let bottomSection = null;
  if (props.project.demo || props.project.demo) {
    bottomSection = (
      <ButtonContainer>
        <Button
          primary
          onClick={() => window.open(`${props.project.demo}`)}
          Text='Visit'
          Icon='linkify'
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
    <StyledProject>
      <SecondaryHeader>{props.project.title}</SecondaryHeader>
      <ProjectFlex>
        <ProjectImage>
          <img src={props.project.image} alt={props.project.title} />
        </ProjectImage>
        <ProjectDetails>
          <p>{props.project.summary}</p>
          <Stack>{props.project.stack}</Stack>
          {bottomSection}
        </ProjectDetails>
      </ProjectFlex>
    </StyledProject>
  );
};

export default ProjectList;
