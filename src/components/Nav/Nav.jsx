import './Nav.css';
import {Link, Route, Switch} from 'react-router-dom';
import React, { Component } from 'react';
// import About from '../../pages/
import MyThoughts from '../../pages/MyThoughts/MyThoughts';
import NewThought from '../../pages/NewThought/NewThought';
import Resources from '../../pages/Resources/Resources';

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
        <main>
        <Switch>
            <Route>
        {/* <Route exact path='/about' render={() =>
        
        } /> */}
        <Route exact path='/mythoughts' render={() =>
          <MyThoughts />
        } />
        <Route exact path='/newthought' render={() =>
          <NewThought />
      } />
      <Route exact path='/resources' render={() =>
          <Resources />
      } />
      </Route>
      </Switch>
      </main>
      </div>
      )
    }
}
