import { Component } from 'react';

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
        }
        let options = {
            method: "POST",
            headers: {
              "Content-Type": "application/json"
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

            <div className="form">
                <h1>New Thought Record</h1>

                    <form>

                        <span>Name this entry:</span>
                        <input name="entryName" value={this.state.entryName} onChange={this.handleChange}/>

                        <span>What emoji resonantes with you right now?</span>
                        <input name="emoji" value={this.state.emoji} onChange={this.handleChange}/>

                        <span>What was the situation?</span>
                        <input name="situation" value={this.state.situation} onChange={this.handleChange}/>

                        <span>Describe your emotions or feelings:</span>
                        <input name="emotion" value={this.state.emotion} onChange={this.handleChange} />

                        <span>Automatic thoughts:</span>
                        <input name="automaticThoughts" value={this.state.automaticThoughts} onChange={this.handleChange}/>

                        <span>Evidence supporting those thoughts:</span>
                        <input name="evidenceSupport" value={this.state.evidenceSupport} onChange={this.handleChange} />

                        <span>Evidence against those thoughts:</span>
                        <input name="evidenceAgainst" value={this.state.evidenceAgainst} onChange={this.handleChange} />

                        <span>New balanced thought:</span>
                        <input name="balanceThought" value={this.state.balanceThought} onChange={this.handleChange}/>

                        <span>How do you feel now?</span>
                        <input name="feelNow" value={this.state.feelNow} onChange={this.handleChange}/>

                        <button onClick={this.handleSubmit}>Save this record</button>
                    </form>


            </div>


        )



    }





}