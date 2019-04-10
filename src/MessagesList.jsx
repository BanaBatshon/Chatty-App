import React, {Component} from 'react';
import Message from './Message.jsx'

class MessagesList extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log(this.props.messages);
    const displayMessages = this.props.messages.map((message, idx ) => {
    return <Message key={idx} username={message.username} content={message.content} />
    })
    return (
        <main className="messages">
          {displayMessages}
        </main>

    );
  }
}

export default MessagesList;