import React from "react";

class TwitterMessage extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: "",
      maxChars: props.maxChars
    };
  }

  insertedMessage = event => {
    this.setState({
      message: event.target.value})
    }
    
    render() {
    let messageLength = this.state.message.length
    return (
      <div>
        <strong>Your message:</strong>
        <input onChange={this.insertedMessage} type="text" name="message" id="message"
       value={this.state.message} />
        <p>Characters Left:{this.state.maxChars-messageLength}</p>
        <p>{this.state.message}</p>
      </div>
    );
  }
}

export default TwitterMessage;
