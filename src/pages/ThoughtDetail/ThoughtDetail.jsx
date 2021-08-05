import { Component } from 'react';
import React from 'react';
import './ThoughtDetail.css';

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
    console.log(id)
    try {
        let fetchThoughtDataResponse = await fetch(`/api/thoughts/detail/${id}`)
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
        let fetchResponse = await fetch((`/api/thoughts/detail/${id}`), {
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
      <div className="thought-detail-container">
        <h1 className="thought-detail-header">Thought Detail</h1>
          <div className="thought-detail-content">
          &nbsp;
          <br />
          <br />
          <div className="thought-detail-contents">
            <p>Entry Name:</p>       
            <div className="thought-info">{this.state.oneThought.entryName}</div>
            <br />
            <br />
            <p>What emoji resonantes with you right now?</p>
            <div className="thought-info">{this.state.oneThought.emoji}</div>
            <br />
            <br />
            <p>What was the situation?</p>
            <div className="thought-info">{this.state.oneThought.situation}</div>
            <br />
            <br />
            <p>Describe your emotions or feelings:</p>
            <div className="thought-info">{this.state.oneThought.emotion}</div>
            <br />
            <br />
            <p>Automatic thoughts:</p>
            <div className="thought-info">{this.state.oneThought.automaticThoughts}</div>
            <br />
            <br />
            <p>Evidence supporting those thoughts:</p>
            <div className="thought-info">{this.state.oneThought.evidenceSupport}</div>
            <br />
            <br />
            <p>Evidence against those thoughts:</p>
            <div className="thought-info">{this.state.oneThought.evidenceAgainst}</div>
            <br />
            <br />
            <p>New balanced thought:</p>
            <div className="thought-info">{this.state.oneThought.balanceThought}</div>
            <br />
            <br />
            <p>How do you feel now?</p>
            <div className="thought-info">{this.state.oneThought.feelNow}</div>
            <br/>
            <br/>   
            <br/>    
            <div className="delete-button">
            <button onClick={this.handleDelete}>Delete this thought record</button>
            </div>  
            </div>
        
            </div>
      </div>
    )
  }
}