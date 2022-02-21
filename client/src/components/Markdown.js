import { Component } from 'react';

class Markdown extends Component {
  /**
   * renders formatted text
   * @returns {JSX.Element}
   */

  render() {
    return <p>{this.props.text}</p>;
  }
}

export default Markdown;