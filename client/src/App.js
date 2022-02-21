import "./App.css";
import { Component } from "react";
import { MessageList } from "./components/Message";
import Form from "./components/Form";
import UserList from "./components/UserList";
import { SocketContext, socket } from "./context/socket";

class App extends Component {
  /** 
   * base component
   * @returns {JSX.Element}
  */

  constructor(props) {
    super(props);
    this.state = {
      messages: [],
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // get message from child component
  handleSubmit(message) {
    this.setState((prevState) => ({
      messages: [...prevState.messages, {text: message}]
    }));
  }

  componentDidMount() {
    socket.on("message", (msg) => {

    });
  }

  render() {
    return (
      <SocketContext.Provider value={socket}>
        <div className="App">
          <div className="MessageWindow">
            <MessageList messages={this.state.messages} />
            <Form onSubmitHandler={this.handleSubmit} />
          </div>
        </div>
      </SocketContext.Provider>
    );
  }
}

export default App;
