import './Nav.css';
import {Link, Route, Switch, Redirect} from 'react-router-dom';
import React, { Component } from 'react';
// import About from '../../pages/
import MyThoughts from '../../pages/MyThoughts/MyThoughts';
import NewThought from '../../pages/NewThought/NewThought';
import Resources from '../../pages/Resources/Resources';

export default class Nav extends Component {
    render() {
        return (
    <div className="App">
      <header className="App-header">
        "THIS IS FINE"
        <nav>
          <Link exact to='/about'>ABOUT</Link>
          &nbsp;&nbsp;&nbsp;
          <Link exact to='/mythoughts'>MY THOUGHTS</Link>
          &nbsp;&nbsp;&nbsp;
          <Link exact to='/newthought'>NEW THOUGHT</Link>
          &nbsp;&nbsp;&nbsp;
          <Link exact to='/resources'>RESOURCES</Link>
          &nbsp;&nbsp;&nbsp;
          <Link exact to='/logout'>LOGOUT</Link>
        </nav>
      </header>
      <main>
        <Switch>
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
      </Switch>
      </main>
    </div>
      )
    }
}
