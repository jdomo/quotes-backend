import React from 'react';
import {Link} from 'react-router-dom';

const Navbar = () => {
  return(
    <div className="navbar-fixed">
      <nav>
        <div className="nav-wrapper">
          <Link to="/"><i className="left far fa-eye"/></Link>
          <Link to="/" className="brand-logo center title main-title">Watch Your Tone</Link>
          <ul id="nav-mobile" className="right hide-on-med-and-down">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link></li>
          </ul>
        </div>
      </nav>
    </div>
  )
}

export default Navbar;