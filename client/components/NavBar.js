import React from 'react';
import { Link } from 'react-router-dom';

const NavBar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark" style={{height: '40px'}}>
      <Link to='/' style={{color: 'white', margin: 'auto'}}>
        CookBook
      </Link>
      <Link to='/' style={{color: 'white', position: 'fixed', right: 0}}>
        <i className="fas fa-home"></i>
      </Link>
      <Link to='/groceries' style={{color: 'white', position: 'fixed', right: '20px'}}>
        <i className="fas fa-shopping-basket"></i>
      </Link>

      {/* <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <a className="nav-link active" aria-current="page" href="/">Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="/groceries">Groceries</a>
        </li>
      </ul> */}
    </nav>
  )
}

export default NavBar;