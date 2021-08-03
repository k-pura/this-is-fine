import './Nav.css';
import {Link, Route, Switch} from 'react-router-dom';
import React, { Component } from 'react';
// import About from '../../pages/

export default class Nav extends Component {
    render() {
        return (
        <div>
          <nav className="Nav">
            <div className="nav-container">
          <Link exact to='/about'>ABOUT</Link>
          &nbsp;&nbsp;&nbsp;
          <Link exact to='/mythoughts'>MY THOUGHTS</Link>
          &nbsp;&nbsp;&nbsp;
          <Link exact to='/newthought'>NEW THOUGHT</Link>
          &nbsp;&nbsp;&nbsp;
          <Link exact to='/resources'>RESOURCES</Link>
          &nbsp;&nbsp;&nbsp;
          <Link exact to='/logout'>LOGOUT</Link>
            </div>
          </nav>
      </div>
      )
    }
}
