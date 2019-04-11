import React, {Component} from 'react';

class Message extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const contentClass = this.props.type === 'postMessage' ? 'message-content' : 'notification-content'
    return (
      <div className="message">
         <span className="message-username">{ this.props.username }</span>
         <span className={contentClass}>{ this.props.content }</span>
      </div>
    );
  }
}
    export default Message;