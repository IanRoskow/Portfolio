import React from 'react';
import styled from 'styled-components';
import { Button as SemanticButton, Icon } from 'semantic-ui-react';
import { throwStatement } from '@babel/types';

const Button = props => {
  const StyledButton = styled(SemanticButton)`
    &&& {
      background-color: ${({ theme }) =>
        props.primary ? theme.primary1 : theme.secondary2};
    }
  `;

  return (
    <StyledButton
      color={props.primary}
      animated='vertical'
      onClick={props.onClick}
    >
      <SemanticButton.Content visible>{props.Text}</SemanticButton.Content>
      <SemanticButton.Content hidden>
        <Icon name={props.Icon} />
      </SemanticButton.Content>
    </StyledButton>
  );
};

export default Button;
