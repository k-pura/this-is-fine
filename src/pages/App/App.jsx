import './App.css';
import { Component } from 'react';
// import { Link, Router, Route, Switch } from 'react-router-dom';
// import React from 'react';
import Nav from '../../components/Nav/Nav.jsx'
// import About from '../About/About'
// import MyThoughts from '../MyThoughts/MyThoughts'
// import NewThought from '../NewThought/NewThought'
// import Resources from '../Resources/Resources'





export default class App extends Component {
  render() {
   return (
     <div className="App">
       <Nav />
     </div>
    )
   }
  }