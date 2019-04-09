import React, {Component} from 'react';
import Message from './Message.jsx'

class MessagesList extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const displayMessages = this.props.messages.map(function (message){
    return <Message key={message.id} content={message.content} />
    })
    return (
      <div>
        <div className="message">
          {displayMessages}
        </div>
      </div>
    );
  }
}

export default MessagesList;