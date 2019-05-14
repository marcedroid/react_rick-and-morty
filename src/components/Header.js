import React from 'react';

//Assets
import logo from '../images/logo.png';

function Header() {
  return (
    <div className="header">
      <img className="logo" src={logo} alt="Rick and Morty" />
    </div>
  );
}

export default Header;
