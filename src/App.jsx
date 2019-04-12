// Imports all of the components of the app
import React, {Component} from 'react';
import NavBar from './NavBar.jsx';
import MessagesList from './MessagesList.jsx';
import ChatBar from './ChatBar.jsx';

// Main app component with default props: username and messages array
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      numUsers: 0,
      currentUser: '',
      messages: [],
      error: ''
    };
    this.socket = new WebSocket("ws://localhost:3001")
  }

  // New message or new username handlers
  addNewMessage = (e) => {
    let username = '';
    if(e.key === 'Enter' && e.target.value.trim()) {
      if (!this.state.currentUser.length) {
        username = 'Anonymous'
      } else {
        username = this.state.currentUser
      }
      const newMessage = {username: username, content: e.target.value, type: 'postMessage'}
      this.setState({error: ''})
      this.socket.send(JSON.stringify(newMessage))
      e.target.value = '';

    } else if(e.key === 'Enter' && !e.target.value) {
      username = this.state.currentUser
   
      this.setState({
        error: "Please enter a message to display!"
      })
    }
   }

   addUsername = (e) => {
     if(e.key === 'Enter' && e.target.value) {
       let previousName = '';
      if (!this.state.currentUser.length) {
        previousName = 'Anonymous'
      } else if (this.state.currentUser === e.target.value) {
        return '';
      } else {
        previousName = this.state.currentUser
      }
      this.setState({currentUser: e.target.value})
      const notification = {content: `${previousName} has changed their name to ${e.target.value}`, type: 'postNotification'}
      this.socket.send(JSON.stringify(notification))
      this.setState({error: ''});
     } else if(e.key === 'Enter') {
      this.setState({currentUser: ''})
      this.setState({error: ''});
    }
   }

  // When the dom is ready (what to do when a user connect or a message is being recieved)
  componentDidMount() {
    this.socket.onmessage = (newMessage) => {
      let incomingMessage = JSON.parse(newMessage.data);
      if (typeof incomingMessage.numUsers === 'number') {
        this.setState({numUsers: incomingMessage.numUsers})
      } else {
      const messages = this.state.messages.concat(incomingMessage)
      this.setState({messages: messages})
      }
    }
  }

  render() {
    return (
      <div>
        <NavBar numUsers={this.state.numUsers} />
        <MessagesList messages={this.state.messages} />
        {this.state.error ?  <span className='error'>Please Enter A Message To Display</span> : ''}
        <ChatBar currentUser={this.state.currentUser} addNewMessage={(e) => this.addNewMessage(e)} addUsername={(e) => this.addUsername(e)} />
      </div>
    );
  }
}

export default App;