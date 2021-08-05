import { Component } from 'react';
import './LoginForm.css';

export default class SignUpForm extends Component {
  state = {
    email: '',
    password: '',
    error: ''
  };

  handleChange = (evt) => {
    this.setState({
      [evt.target.name]: evt.target.value,
      error: ''
    });
  };

  handleSubmit = async (evt) => {
    evt.preventDefault();
    try {
      // 1. POST our new user info to the server
      const fetchResponse = await fetch('/api/users/login', {
        method: 'POST',
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: this.state.email, password: this.state.password, })
      })

      // 2. Check "fetchResponse.ok". False means status code was 4xx from the server/controller action
      if (!fetchResponse.ok) throw new Error('Fetch failed - Bad request')

      let token = await fetchResponse.json() // 3. decode fetch response: get jwt token from srv
      localStorage.setItem('token', token);  // 4. Stick token into localStorage

      const userDoc = JSON.parse(atob(token.split('.')[1])).user; // 5. Decode the token + put user document into state
      this.props.setUserInState(userDoc)

    } catch (err) {
      console.log("SignupForm error", err)
      this.setState({ error: 'Sign Up Failed - Try Again' });
    }
  }

  render() {
    return (
      <div className="account-form-container">
        <header className="account-header">Welcome Back!</header>
          <div className="account-form-content">
            <form className="account-form-contents account" autoComplete="off" onSubmit={this.handleSubmit}>

                <input
                placeholder="Email"
                type="text" 
                name="email" 
                class="form-input"
                value={this.state.email} onChange={this.handleChange} required />

                <br />

                <input
                placeholder="Password"
                type="password" 
                name="password" 
                class="form-input"
                value={this.state.password} onChange={this.handleChange} required />

                <br />

                <button
                type="submit"
                class="account-form-button">LOG IN</button>

            </form>
          </div>
        <p className="error-message">&nbsp;{this.state.error}</p>
      </div>
    );
  }
}