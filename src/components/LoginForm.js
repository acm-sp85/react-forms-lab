import React from "react";


class LoginForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      username: "",
      password: ""
    };
  }

  handleTyping = event => {

    this.setState({
      [event.target.name]: event.target.value
    })

  }

  handleSubmit = event => {
    event.preventDefault();
    const { username, password } = this.state
    if (username !== "" && password !== "") {
      console.log(username + " / " + password)
      this.props.handleLogin({username,password})

    }



  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" onChange={this.handleTyping} value={this.state.value} />
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" onChange={this.handleTyping} value={this.state.value} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
