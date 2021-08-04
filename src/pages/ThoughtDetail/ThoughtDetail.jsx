import { Component } from 'react';
import React from 'react';
import history from '../../history';

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

  handleDelete = async () => {
    try {
        let id = this.props.match.params.id
        console.log("LOOK HERE FOR DELETE STUFF", this.props.match.params.id)
        let jwt = localStorage.getItem('token')
        console.log(jwt)
        let fetchResponse = await fetch((`/api/thoughts/${id}`), {
            method: "DELETE",
            headers: {"Content-Type": "application/json" ,'Authorization': 'Bearer ' + jwt}, 
        })  
        console.log(fetchResponse, "HEY DIS FETCH RESPONSE!!")
        let deleteData =  await fetchResponse.json() 
        console.log("GET DELETE", deleteData)
        if (!fetchResponse.ok) throw new Error("Couldn't do the delete thing!")
        this.props.history.push('/mythoughts');
        
    } catch (err) {
        console.error('ERROR:', err) 
    }
  }


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
            <br/>  
            <button onClick={this.handleDelete}>Delete this thought record</button>
      </div>
    )
  }
}