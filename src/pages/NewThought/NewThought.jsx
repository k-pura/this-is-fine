import { Component } from 'react';
import './NewThought.css'

export default class NewThoughtRecordForm extends Component {

    state = {
        entryName: "",
        emoji: "",
        situation: "",
        emotion: "",
        automaticThoughts: "",
        evidenceSupport: "",
        evidenceAgainst: "",
        balanceThought: "",
        feelNow: "",
    };

    handleChange = (e) => {
        this.setState({ 
        [e.target.name]: e.target.value 
        });
    };

    handleSubmit = async () => {
        let body = {
            entryName: this.state.entryName,
            emoji: this.state.emoji,
            situation: this.state.situation,
            emotion: this.state.emotion,
            automaticThoughts: this.state.automaticThoughts,
            evidenceSupport: this.state.evidenceSupport,
            evidenceAgainst: this.state.evidenceAgainst,
            balanceThought: this.state.balanceThought,
            feelNow: this.state.feelNow,
            user: this.props.user._id,
        }

// I need to define this jwt inside the options somehow so that I can put line 44 to work
// i need to do this to protect a users entries to themselves only

        let jwt = localStorage.getItem('token')

        let options = {
            
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              'Authorization' : 'Bearer ' + jwt,
            },
            body: JSON.stringify(body)
        };
        await fetch ("/api/submitThoughtRecord", options)
            .then(res => res.json())
            .then(data => {
                this.props.getThoughts(); //test this one out 
                this.setState({
                    entryName: "",
                    emoji: "",
                    situation: "",
                    emotion: "",
                    automaticThoughts: "",
                    evidenceSupport: "",
                    evidenceAgainst: "",
                    balanceThought: "",
                    feelNow: "",
                })
            })




    }

    render () {
        return (
            <div class="thought">
                <h1>New Thought Record</h1>
                        <div class="thought-container">
                            <div class="thought-contents">
                    <form class="thought-form">
                        <span>Name this entry:</span>
                        <div class="textbox-title">
                        <textarea name="entryName" value={this.state.entryName} onChange={this.handleChange}/>
                        </div>
                        <br />

                        <span>What emoji resonantes with you right now?</span>
                        <select name="emoji" value={this.state.emoji} onChange={this.handleChange}>
                        <option>🙂</option>
                        <option>🤪</option>
                        <option>😔</option>
                        <option>🤬</option>
                        <option>🙄</option>
                        <option>😧</option>
                        <option>🤭</option>
                        <option>🤯</option>
                        <option>😤</option>
                        <option>😢</option>
                        <option>😳</option>
                        <option>🙄</option>
                        <option>😬</option>
                        <option>💩</option>
                        <option>😍</option>
                        <option>😒</option>
                        <option>😭</option>
                        <option>🤣</option>

                        </select>

                        <span>What was the situation?</span>
                        <div class="textbox">
                        <textarea name="situation" value={this.state.situation} onChange={this.handleChange}/>
                        </div>
                        <br />
                        <span>Describe your emotions or feelings:</span>
                        <div class="textbox">
                        <textarea name="emotion" value={this.state.emotion} onChange={this.handleChange} />
                        </div>
                        <br />
                        <span>Automatic thoughts:</span>
                        <div class="textbox">
                        <textarea name="automaticThoughts" value={this.state.automaticThoughts} onChange={this.handleChange}/>
                        </div>
                        <br />
                        <span>Evidence supporting those thoughts:</span>
                        <div class="textbox">
                        <textarea name="evidenceSupport" value={this.state.evidenceSupport} onChange={this.handleChange} />
                        </div>
                        <br />
                        <span>Evidence against those thoughts:</span>
                        <div class="textbox">
                        <textarea name="evidenceAgainst" value={this.state.evidenceAgainst} onChange={this.handleChange} />
                        </div>
                        <br />
                        <span>New balanced thought:</span>
                        <div class="textbox">
                        <textarea name="balanceThought" value={this.state.balanceThought} onChange={this.handleChange}/>
                        </div>
                        <br />
                        <span>How do you feel now?</span>
                        <div class="text">
                        <textarea name="feelNow" value={this.state.feelNow} onChange={this.handleChange}/>
                        </div>
                        
                        <br />
                        <br />
                        
                        <button onClick={this.handleSubmit}>Save this record</button>
                   
                    </form>
         </div>
</div>
                        </div>

            


        )



    }


}