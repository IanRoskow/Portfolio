import React from 'react';
import styled from 'styled-components';
import { Transition, Icon } from 'semantic-ui-react';

const StyledMobileMenu = styled.div`
  &.toggle {
    height: 100px;
  }
  &.toggle > :nth-child(1) {
    transform: rotate(45deg) !important;
    transform-origin: 15px 20px !important;
  }
  &.toggle > :nth-child(2) {
    opacity: 0 !important;
  }
  &.toggle > :nth-child(3) {
    transform: rotate(-45deg) !important;
    transform-origin: 11px 12px !important;
  }
`;

const MenuIcon = styled(Icon)`
  &&&&& {
    color: ${({ theme }) => theme.secondary1};
    margin: 20px auto;
  }
`;

const StyledIcon = styled(Icon)`
  transition: all 0.2s;
  &&&&& {
    width: auto;
    height: auto;
    line-height: 0.3;
    margin: 0;
    display: block;
    transform: rotate(0);
    opacity: 1;
  }
`;

const MobileMenu = styled.div`
  position: fixed;
  z-index: 10;
  width: 50px;
  background-color: ${({ theme }) => theme.canvasBackground};
  color: ${({ theme }) => theme.canvasText};
  height: auto;
  right: 15px;
  top: 55px;
  border-radius: 5px;
  text-align: center;
  transition: opacity 200ms;
  opacity: 1;
  &.hidden {
    opacity: 0;
  }
`;

const MobileHeader = props => {
  return (
    <MobileMenu className={props.inCanvas ? 'hidden' : ''}>
      <StyledMobileMenu
        className={props.active ? 'toggle' : ''}
        onClick={() => props.setActive(!props.active)}
        style={{ height: '50px' }}
      >
        <StyledIcon
          size='big'
          inverted
          color='grey'
          name='window minimize outline'
        />
        <StyledIcon
          size='big'
          inverted
          color='grey'
          name='window minimize outline'
        />
        <StyledIcon
          size='big'
          inverted
          color='grey'
          name='window minimize outline'
        />
      </StyledMobileMenu>
      <Transition visible={props.active} animation='fade down' duration={500}>
        <MenuIcon
          name='home'
          size='big'
          onClick={() => {
            props.setActive(!props.active);
            props.scrollPage('home');
          }}
        />
      </Transition>
      <Transition visible={props.active} animation='fade down' duration={500}>
        <MenuIcon
          name='user circle outline'
          size='big'
          onClick={() => {
            props.setActive(!props.active);
            props.scrollPage('about');
          }}
        />
      </Transition>
      <Transition visible={props.active} animation='fade down' duration={500}>
        <MenuIcon
          name='file code outline'
          size='big'
          onClick={() => {
            props.setActive(!props.active);
            props.scrollPage('projects');
          }}
        />
      </Transition>
      <Transition visible={props.active} animation='fade down' duration={500}>
        <MenuIcon
          name='mail outline'
          size='big'
          onClick={() => {
            props.setActive(!props.active);
            props.scrollPage('contact');
          }}
        />
      </Transition>
    </MobileMenu>
  );
};

export default MobileHeader;
