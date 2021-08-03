import { Component } from 'react';
import React from 'react';
import {Link} from 'react-router-dom';

export default class MyThoughts extends Component {
  state = {
    thoughts: [],
  }  
  getThoughts = async () => {
    let fetchThoughtDataResponse = await fetch('/api/thoughts/')
    if (!fetchThoughtDataResponse.ok) throw new Error("Couldn't fetch thoughts!")
    let thoughtsData = await fetchThoughtDataResponse.json() // <------- convert fetch response into a js object
    console.log("get thoughts", thoughtsData)
    this.setState({thoughts: thoughtsData});
  };

  async componentDidMount() {
    try {
     await this.getThoughts();
    } catch (err) {
      console.error('ERROR:', err) // <-- log if error
    }
  };
  render() {
    return (
      <div className="myThoughts">
        <h1>All of my thoughts</h1>
    {this.state.thoughts.map(t => <h1>
      <Link to={`/thoughts/${t.id}`} activeClassName="current">{t.entryName}</Link>
      </h1>
    )}
       </div>
    )
  }
}