import React, {Component} from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    return (
      <div className="message">
         <span className="message-content">{ this.props.content }</span>
      </div>
    );
  }
}
    export default Message;