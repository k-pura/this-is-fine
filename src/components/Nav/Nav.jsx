import './Nav.css';
import {Link, Route, Switch} from 'react-router-dom';
import React, { Component } from 'react';
import UserLogOut from '../UserLogOut/UserLogOut';
import AuthPage from '../../pages/AuthPage/AuthPage';
import history from "../../history";

// export default function nav(loc) {
//   history.push(loc);
// }

export default class Nav extends React.Component {
  state ={
    isLoggedIn: true,
    user: null,
  };

  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
  }

  handleLogOut = (e) => {
    e.preventDefault()
    console.log('logout clicked')
    let token = localStorage.getItem('token')
    token = null
    localStorage.removeItem('token')
    history.push('/');
    this.setState({
      user: null,
      isLoggedIn: false,
    })
  }

  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1])); // decode token
      if (payload.exp < Date.now() / 1000) {  // Check if our token is expired, and remove if it is (standard/boilerplate)
        localStorage.removeItem('token');
        token = null;
      } else { // token not expired! our user is still 'logged in'. Put them into state.
        let userDoc = payload.user // grab user details from token
        console.log("userDoc", userDoc)
        this.setState({
          user: userDoc,
          isLoggedIn: true,
        })      
      }
    }
  }

  render() {
    return (
      <div>
        {this.state.user ? 
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
            <Link exact to='/'>
            <UserLogOut
              handleLogOut={this.handleLogOut}
            />
            </Link>
          </div>
        </nav>
        :
        <AuthPage setUserInState={this.setUserInState}/>
        } 
      </div>
    )
  }
}
