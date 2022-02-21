import { Component } from 'react';
import "./Form.css";

class Form extends Component {
  /**
   * Input for sending messages
   * @returns {JSX.Element}
   */

  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // sends the message to the parent component
  handleSubmit(e) {
    e.preventDefault();
    let message = e.target.querySelector("input").value;
    if (message.trim()) {
      this.props.onSubmitHandler(message);
    }
    e.target.querySelector("input").value = "";
  }

  render() {
    return (
      <form className="Form" onSubmit={this.handleSubmit}>
        <input type="text" placeholder="Type a message..." />
        <button>Send</button>
      </form>
    );
  }
}

export default Form;