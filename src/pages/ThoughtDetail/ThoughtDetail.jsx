import { Component } from 'react';
import React from 'react';

export default class ThoughtDetail extends Component {
  state = {
    oneThought: [],
  } 

//   getOne = async (incoming_thought_id) => {
//     let fetchThoughtDataResponse = await fetch('/api/thoughts/:id')
//     if (!fetchThoughtDataResponse.ok) throw new Error("Couldn't fetch your thought!")
//     let oneThoughtData = await fetchThoughtDataResponse.json() // <------- convert fetch response into a js object
//     console.log("get thought", oneThoughtData)
//     this.setState({oneThought: oneThoughtData});
//   };

  async componentDidMount() {
    console.log("LOOK HERE", this.props.match.params.id)
    try {
        let fetchThoughtDataResponse = await fetch('/api/thoughts/:id')
        if (!fetchThoughtDataResponse.ok) throw new Error("Couldn't fetch your thought!")
        let oneThoughtData = await fetchThoughtDataResponse.json() // <------- convert fetch response into a js object
        console.log("get thought", oneThoughtData)
        this.setState({oneThought: oneThoughtData});    
    } catch (err) {
      console.error('ERROR:', err) // <-- log if error
    }
  };
  render() {
    return (
      <div className="thoughtDetail">
        <h1>Thought Detail</h1>
    {this.state.oneThought.map(t => <h1>{t.entryName}</h1>)}
      </div>
    )
  }
}