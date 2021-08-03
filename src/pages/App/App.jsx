import './App.css';
import { Component } from 'react';
import { Route, Switch, Redirect, Link } from 'react-router-dom';
import React from 'react';
import NewThoughtRecordForm from '../../components/NewThoughtRecordForm/NewThoughtRecordForm';
import MyThoughts from '../MyThoughts/MyThoughts';

export default class App extends Component {
  render() {
    return (
      <main className="App">
       App

       <NewThoughtRecordForm/>


       <MyThoughts /> 
      </main>
    )
  }
}