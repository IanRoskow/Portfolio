import React from 'react';

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
    <div className='menu'>
      <div onClick={() => scrollPage('home')} className='logo'>
        {`< Roskow >`}
      </div>
      <div onClick={() => scrollPage('contact')} className='item'>
        Contact
      </div>
      <div onClick={() => scrollPage('projects')} className='item'>
        Projects
      </div>
      <div onClick={() => scrollPage('about')} className='item'>
        About
      </div>
    </div>
  );
};

export default Header;
