import React from 'react';

import LogoLink from './LogoLink';
import { ReactComponent as LogoSvg } from '../assets/img/logo.svg';

const Topbar = () => {
  return (
    <header className="topbar" data-testid="topbar">
      <div className="container">
        <LogoLink href="/" className="topbar__logo" title="logo">
          <LogoSvg alt="Logo Instagram" title="logo" />
        </LogoLink>
      </div>
    </header>
  );
}

export default Topbar;