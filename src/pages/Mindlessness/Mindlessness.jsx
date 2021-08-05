import { Component } from 'react';
import React from 'react';

export default class Resources extends React.Component {

    state = {
        joke: "",
    }

    async fetchJoke() {
        try {
            console.log("i am inside the fetch")
            const response = await fetch("http://icanhazdadjoke.com", {
                headers: {
                  Accept: "application/json",
                },
              });
              console.log("i have done headers")
              const data = await response.json();
              console.log("here the joke", data)

        } catch (err) {
          console.error('ERROR:', err) // <-- log if error
        }
      };

      async componentDidMount() {
        try {
         await this.fetchJoke();
        } catch (err) {
          console.error('ERROR:', err) // <-- log if error
        }
      };

      updateJoke (incoming_joke) {

          this.setState ({
              joke: incoming_joke
          });
      }


        render(){
            return(
            <div className="mindless">
                

                <button onClick={()=>this.updateJoke()}>Click here for a new dad joke!</button>

                <p>joke: {this.state.joke}</p>

            </div>
            )
        }
        

}