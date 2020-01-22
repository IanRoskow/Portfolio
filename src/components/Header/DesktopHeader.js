import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  background-color: ${({ theme }) => theme.canvasLight};
  color: ${({ theme }) => theme.canvasText};
  height: 50px;
  padding-left: 10%;
  transition: opacity 200ms;
  opacity: 0.9;
  &.hidden {
    opacity: 0;
  }
`;

const Item = styled.div`
  float: left;
  font-size: 1.2em;
  padding: 15px 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.canvasText};
  transition: color 500ms;
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.primary1};
  }
`;

const DesktopHeader = props => {
  return (
    <Menu className={props.inCanvas ? 'hidden' : ''}>
      <Item onClick={() => props.scrollPage('home')}>Home</Item>
      <Item onClick={() => props.scrollPage('about')}>About</Item>
      <Item onClick={() => props.scrollPage('projects')}>Projects</Item>
      <Item onClick={() => props.scrollPage('contact')}>Contact</Item>
    </Menu>
  );
};

export default DesktopHeader;
