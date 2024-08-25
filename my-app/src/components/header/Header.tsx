import React from "react";
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header>
      <Link to=''><img src='' alt='logo'/></Link>
      <nav>
        <ul>
          <li>About us</li>
          <li>Rent</li>
          <li>Buy</li>
          <li>Services</li>
        </ul>
      </nav>
    </header>
  )
}

export default Header;
