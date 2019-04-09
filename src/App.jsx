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
      currentUser: '',
      messages: [
        { id: 1,
          username: 'Anonymous',
          content:'hi'
        },
        { id: 2,
          username: 'Bob',
          content:'how'
        },
        { id: 3,
          username: 'Bob',
          content:'are'
        },
        { id: 4,
          username: 'Bob',
          content:'you'
        }
      ],
      error: ''
    };
  }
  addNewMessage = (e) => {
    if(e.key === 'Enter') {
      const newMessage = {id: this.state.message, username: this.state.currentUser, content: e.target.value}
      const messages = this.state.messages.concat(newMessage)
      this.setState({messages: messages})
      e.target.value = '';
    }
   }

   addUsername = (e) => {
    if(e.key === 'Enter') {
      this.setState({currentUser: e.target.value})
      e.target.value = '';
    }
   }
  render() {
    return (
      <div>
        <NavBar />
        <MessagesList messages={this.state.messages} />
        <ChatBar addNewMessage={(e) => this.addNewMessage(e)} addUsername={(e) => this.addUsername(e)} />
      </div>
    );
  }
}
















export default App;
