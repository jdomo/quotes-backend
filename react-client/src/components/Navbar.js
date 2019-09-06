import React from 'react';

const Navbar = () => {
  return(
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <a href="#" className="brand-logo center title">Watch Your Tone</a>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><a href="#">Home</a></li>
            <li><a href="#">Register</a></li>
            <li><a href="#">Login</a></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;