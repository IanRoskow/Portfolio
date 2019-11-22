import React from 'react';
import styled from 'styled-components';

const Menu = styled.div`
  position: fixed;
  z-index: 10;
  width: 100%;
  background-color: ${({ theme }) => theme.canvasBackground};
  color: ${({ theme }) => theme.canvasText};
  height: 50px;
  padding-left: 10%;
`;

const Item = styled.div`
  float: left;
  font-size: 1.2em;
  padding: 13px 20px;
  font-weight: bold;
  color: ${({ theme }) => theme.secondary1};
  cursor: pointer;
  &:hover {
    color: ${({ theme }) => theme.primary1};
  }
`;

const scrollPage = position => {
  const desktop = {
    home: 0,
    about: 916,
    projects: 2200,
    contact: 3146.5
  };
  const mobile = {
    home: 0,
    about: 916,
    projects: 2280,
    contact: 4077
  };
  window.screenY > 740
    ? window.scroll({
        top: desktop[position],
        left: 0,
        behavior: 'smooth'
      })
    : window.scroll({
        top: mobile[position],
        left: 0,
        behavior: 'smooth'
      });
};

const Header = () => {
  return (
    <Menu>
      <Item onClick={() => scrollPage('home')}>Home</Item>
      <Item onClick={() => scrollPage('about')}>About</Item>
      <Item onClick={() => scrollPage('projects')}>Projects</Item>
      <Item onClick={() => scrollPage('contact')}>Contact</Item>
    </Menu>
  );
};

export default Header;
