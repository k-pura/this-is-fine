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
        <nav className="Nav">
            <div className="nav-container">
            <Link className="link" to='/'>HOME</Link>
             &nbsp;&nbsp;&nbsp;
            <Link className="link" to='/about'>ABOUT</Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="link" to='/mythoughts'>MY THOUGHTS</Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="link" to='/newthought'>NEW THOUGHT</Link>
            &nbsp;&nbsp;&nbsp;
            <Link className="link" to='/resources'>RESOURCES</Link>
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
      </div>
      </nav>
      )
    }
}
