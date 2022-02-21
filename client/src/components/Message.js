import { Component } from 'react';
import Markdown from './Markdown';
import "./Message.css";

const DEFAULT_IMG =
  "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9Ii0xMS41IC0xMC4yMzE3NCAyMyAyMC40NjM0OCI+CiAgPHRpdGxlPlJlYWN0IExvZ288L3RpdGxlPgogIDxjaXJjbGUgY3g9IjAiIGN5PSIwIiByPSIyLjA1IiBmaWxsPSIjNjFkYWZiIi8+CiAgPGcgc3Ryb2tlPSIjNjFkYWZiIiBzdHJva2Utd2lkdGg9IjEiIGZpbGw9Im5vbmUiPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIi8+CiAgICA8ZWxsaXBzZSByeD0iMTEiIHJ5PSI0LjIiIHRyYW5zZm9ybT0icm90YXRlKDYwKSIvPgogICAgPGVsbGlwc2Ugcng9IjExIiByeT0iNC4yIiB0cmFuc2Zvcm09InJvdGF0ZSgxMjApIi8+CiAgPC9nPgo8L3N2Zz4K";
const DEFAULT_NAME = "ReactJS";

class Message extends Component {
  /**
   * renders a message with an avatar and markdown text
   * @returns {JSX.Element}
   */

  render() {
    return (
      <div className="Message">
        <Avatar src={this.props.avatarSrc} />
        <div>
          <span>{this.props.name || DEFAULT_NAME}</span>
          <Markdown text={this.props.text} />
        </div>
      </div>
    );
  }
}

class Avatar extends Component {
  /**
   * renders an avatar
   * @returns {JSX.Element}
   */

  render() {
    return (
      <img
        src={this.props.src || DEFAULT_IMG}
        className="Avatar"
        alt="Avatar"
      />
    );
  }
}

class AvatarName extends Component {
  /**
   * renders an avatar and a name
   * @returns {JSX.Element}
   */

  render() {
    return (
      <div className="AvatarName">
        <Avatar src={this.props.avatarSrc} />
        <span>{this.props.name || DEFAULT_NAME}</span>
      </div>
    );
  }
}

class MessageList extends Component {
  /**
   * display the list of <Message /> components
   * @returns {JSX.Element}
   */

  render() {
    return (
      <div className="MessageList">
        {
          this.props.messages.map((message, index) => <Message key={index} text={message.text} avatarSrc={message.avatarSrc} name={message.name} />)
        }
      </div>
    );
  }
}

export { AvatarName, MessageList }; 