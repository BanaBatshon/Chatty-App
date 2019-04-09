import React, {Component} from 'react';
import Message from './Message.jsx'

class MessagesList extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    const displayMessages = this.props.messages.map(function (message){
    return <Message key={message.id} username={message.username} content={message.content} />
    })
    return (
        <main className="messages">
          {displayMessages}
        </main>

    );
  }
}

export default MessagesList;