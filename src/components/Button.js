import React from 'react';
import styled from 'styled-components';
import { Button as SemanticButton, Icon } from 'semantic-ui-react';

const Button = props => {
  const StyledButton = styled(SemanticButton)`
    &&& {
      background-color: ${({ theme }) =>
        props.primary ? theme.primary2 : null};
      color: ${({ theme }) => (props.primary ? theme.canvasText : null)};

      &:hover {
        background-color: ${({ theme }) =>
          props.primary ? theme.primary1 : null};
      }
    }
  `;

  return (
    <StyledButton animated='vertical' onClick={props.onClick}>
      <SemanticButton.Content visible>{props.Text}</SemanticButton.Content>
      <SemanticButton.Content hidden>
        <Icon name={props.Icon} />
      </SemanticButton.Content>
    </StyledButton>
  );
};

export default Button;
