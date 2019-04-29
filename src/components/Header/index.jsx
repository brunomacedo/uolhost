import React from 'react';
import Logo from '../../assets/images/logo_uol_branco.svg';
import './header.sass';

const Header = () => (
  <header className="main_header bg-black">
    <h1>
      <img src={Logo} alt="UOL" className="main_header--logo" />
    </h1>
  </header>
);

export default Header;
