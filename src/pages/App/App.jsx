import './App.css';
import { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import React from 'react';
import NewThoughtRecordForm from '../../components/NewThoughtRecordForm/NewThoughtRecordForm';
import AuthPage from '../AuthPage/AuthPage';

export default class App extends Component {
  state = {
    user: null,
  }

  // if the user clicks signup/login (and is legit), put the user in state.
  setUserInState = (incomingUserData) => {
    this.setState({ user: incomingUserData})
  }

  // when the page refreshes, check localStorage for the user jwt token
  componentDidMount() {
    let token = localStorage.getItem('token')
    if (token) {
      const payload = JSON.parse(atob(token.split('.')[1])); // decode token
      if (payload.exp < Date.now() / 1000) {  // Check if our token is expired, and remove if it is (standard/boilerplate)
        localStorage.removeItem('token');
        token = null;
      } else { // token not expired! our user is still 'logged in'. Put them into state.
        let userDoc = payload.user // grab user details from token
        this.setState({user: userDoc})      
      }
    }
  }
  
  render() {
    return (
      <main className="App">
        { this.state.user ? 
          <p1>
            <NewThoughtRecordForm/>
          </p1> :
         <AuthPage setUserInState={this.setUserInState}/>
        }  
      </main>
    )
  }
}
