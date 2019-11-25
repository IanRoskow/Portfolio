import React from 'react';
import styled from 'styled-components';
import { Button as SemanticButton, Icon } from 'semantic-ui-react';

const Button = props => {
  return (
    <SemanticButton animated='vertical' onClick={props.onClick}>
      <SemanticButton.Content visible>{props.Text}</SemanticButton.Content>
      <SemanticButton.Content hidden>
        <Icon name={props.Icon} />
      </SemanticButton.Content>
    </SemanticButton>
  );
};

export default Button;
