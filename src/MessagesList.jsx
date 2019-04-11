import React, {Component} from 'react';
import Message from './Message.jsx'

class MessagesList extends Component {
  constructor(props) {
    super(props);
  }

  render () {
    console.log(this.props.messages);
    const displayMessages = this.props.messages.map((message) => {
    return <Message key={message.id} username={message.username} content={message.content} type={message.type} />
    })
    return (
        <main className="messages">
          {displayMessages}
        </main>

    );
  }
}

export default MessagesList;