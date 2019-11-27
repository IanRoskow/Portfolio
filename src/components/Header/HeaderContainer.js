import React, { useState } from 'react';
import DesktopHeader from './DesktopHeader';
import MobileHeader from './MobileHeader';
import { scrollPage } from '../../utils/utils';

const Header = () => {
  const [active, setActive] = useState(false);
  const [isDesktop, setDesktop] = useState(window.innerWidth > 780);
  const [inCanvas, setLocation] = useState(window.scrollY < window.innerHeight);

  window.addEventListener('resize', () => {
    let size = window.innerWidth > 780;
    if (isDesktop !== size) {
      setDesktop(!isDesktop);
    }
  });

  window.addEventListener('scroll', () => {
    let location = window.scrollY < window.innerHeight;
    if (inCanvas !== location) {
      setLocation(!inCanvas);
    }
    if (active) {
      setActive(!active);
    }
  });

  const MenuBar = isDesktop ? (
    <DesktopHeader
      inCanvas={inCanvas}
      scrollPage={value => scrollPage(value)}
    />
  ) : (
    <MobileHeader
      active={active}
      inCanvas={inCanvas}
      setActive={value => setActive(value)}
      setLocation={value => setLocation(value)}
      scrollPage={value => scrollPage(value)}
    />
  );
  return MenuBar;
};

export default Header;
