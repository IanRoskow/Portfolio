import React from 'react';
import styled from 'styled-components';
import { SecondaryHeader } from './StyledComponents/GlobalsStyles';
import Button from './Button';

const StyledProject = styled.div`
  padding: 20px 0px;
`;

const ProjectImage = styled.div`
  flex: 1 1 50%;
  text-align: center;

  & > img {
    max-width: 100%;
  }
`;

const ProjectDetails = styled.div`
  flex: 1 1 50%;

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

const ProjectList = props => {
  let flexDirection = props.project.key % 2 ? 'row-reverse' : 'row';
  console.log(props.project.key);
  const ProjectFlex = styled.div`
    display: flex;
    flex-direction: ${flexDirection};
    align-items: stretch;

    @media (max-width: 780px) {
      flex-direction: column;
    }
  `;

  return (
    <StyledProject>
      <SecondaryHeader>{props.project.title}</SecondaryHeader>
      <ProjectFlex>
        <ProjectImage>
          <img src={props.project.image} alt={props.project.title} />
        </ProjectImage>
        <ProjectDetails>
          <p>{props.project.summary}</p>
          <p>{props.project.stack}</p>
          <ButtonContainer>
            <Button
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
        </ProjectDetails>
      </ProjectFlex>
    </StyledProject>
  );
};

export default ProjectList;
