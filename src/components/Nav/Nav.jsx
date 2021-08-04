import './Nav.css';
import {Link} from 'react-router-dom';
import React, { Component } from 'react';
// import About from '../../pages/

export default class Nav extends Component {
    render() {
        return (

          <nav className="Nav">
            <div className="nav-container">
          <Link id="link" exact to='/about'>ABOUT</Link>
          &nbsp;&nbsp;&nbsp;
          <Link id="link" exact to='/mythoughts'>MY THOUGHTS</Link>
          &nbsp;&nbsp;&nbsp;
          <Link id="link" exact to='/newthought'>NEW THOUGHT</Link>
          &nbsp;&nbsp;&nbsp;
          <Link id="link" exact to='/resources'>RESOURCES</Link>
          &nbsp;&nbsp;&nbsp;
          <Link id="link" exact to='/logout'>LOGOUT</Link>
            </div>
          </nav>

      )
    }
}
