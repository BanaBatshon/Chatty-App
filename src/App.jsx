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
      currentUser: 'Bob',
      messages: [
        { id: 1,
          username: 'Bob',
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
      ]
    };
  }

  componentDidMount() {
    console.log("componentDidMount <App />");
    setTimeout(() => {
      console.log("Simulating incoming message");
      // Add a new message to the list of messages in the data store
      const newMessage = {id: 5, content: "Hello there!"};
      const messages = this.state.messages.concat(newMessage)
      // Update the state of the app component.
      // Calling setState will trigger a call to render() in App and all child components.
      this.setState({messages: messages})
    }, 3000);
  }
  
  render() {
    return (
      <div>
        <NavBar />
        <MessagesList messages={this.state.messages} />
        <ChatBar currentUser={this.state.currentUser} />
      </div>
    );
  }
}
















export default App;
