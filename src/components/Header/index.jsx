import React from 'react';
import { Link } from 'react-router-dom';

import Logo from '../../assets/images/logo_uol_branco.svg';
import './header.sass';

const Header = () => (
  <header className="main_header bg-black">
    <h1 className="main_header--logo">
      <Link to="/">
        <img src={Logo} alt="UOL" />
      </Link>
    </h1>
  </header>
);

export default Header;
