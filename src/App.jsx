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

  componentDidMount() {
    this.socket.onopen = () => {
      console.log("Connected to server");
    };

    this.socket.onmessage = (newMessage) => {
      console.log("testtttt",newMessage);
      let incomingMessage = JSON.parse(newMessage.data);
      const messages = this.state.messages.concat(incomingMessage)
      this.setState({messages: messages}, function() {
        console.log(this.state.messages)
      })
      
    }
  }

  addNewMessage = (e) => {
    if(e.key === 'Enter' && e.target.value) {
      let username = '';
      if (!this.state.currentUser.length) {
        username = 'Anonymous'
      } else {
        username = this.state.currentUser
      }
      const newMessage = {username: username, content: e.target.value}
      this.setState({error: ''})
      this.socket.send(JSON.stringify(newMessage))

      e.target.value = '';

    } else if(e.key === 'Enter') {
      this.setState({error: "Please enter a message to display!"})
    }
   }

   addUsername = (e) => {
     console.log("testtt");
      this.setState({currentUser: e.target.value})
   }

  render() {
    if (this.state.error.length === 0) {
      return (
        <div>
          <NavBar />
          <MessagesList messages={this.state.messages} />
          <ChatBar currentUser={this.state.currentUser} addNewMessage={(e) => this.addNewMessage(e)} addUsername={(e) => this.addUsername(e)} />
        </div>
      );
    } else {
      return (
        <div>
          <NavBar />
          <MessagesList messages={this.state.messages} />
          <h3 className='error'>Please Enter A Message To Display</h3>
          <ChatBar currentUser = {this.state.currentUser} addNewMessage={(e) => this.addNewMessage(e)} addUsername={(e) => this.addUsername(e)} />

        </div>
      )
    }
  }
}

export default App;
