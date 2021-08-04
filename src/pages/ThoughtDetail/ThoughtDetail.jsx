import { Component } from 'react';
import React from 'react';

export default class ThoughtDetail extends Component {
  state = {
    oneThought: {},
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
    let id = this.props.match.params.id
    console.log()
    try {
        let fetchThoughtDataResponse = await fetch(`/api/thoughts/${id}`)
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
            <p>Entry Name:</p>       
            {this.state.oneThought.entryName}

            <p>What emoji resonantes with you right now?</p>
            {this.state.oneThought.emoji}

            <p>What was the situation?</p>
            {this.state.oneThought.situation}

            <p>Describe your emotions or feelings:</p>
            {this.state.oneThought.emotion}

            <p>Automatic thoughts:</p>
            {this.state.oneThought.automaticThoughts}

            <p>Evidence supporting those thoughts:</p>
            {this.state.oneThought.evidenceSupport}

            <p>Evidence against those thoughts:</p>
            {this.state.oneThought.evidenceAgainst}

            <p>New balanced thought:</p>
            {this.state.oneThought.balanceThought}

            <p>How do you feel now?</p>
            {this.state.oneThought.feelNow}
            <br/>
            <br/>
            <button>Edit this thought record</button>
            <br/>    
            <br/>  
            <button>Delete this thought record</button>
      </div>
    )
  }
}