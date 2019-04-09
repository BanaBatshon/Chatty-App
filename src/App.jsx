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
          content:'hi'
        },
        { id: 2,
          content:'how'
        },
        { id: 3,
          content:'are'
        },
        { id: 4,
          content:'you'
        }
      ]
    };
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
