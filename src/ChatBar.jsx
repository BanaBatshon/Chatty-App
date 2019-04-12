import React, {Component} from 'react';

class chatBar extends Component {
  constructor(props) {
    super(props);
  }
  
  render () {
    return (
      <footer className="chatbar">
      <input className="chatbar-username" onKeyPress= {this.props.addUsername} placeholder="Your Name (Optional)"/>
      <input className="chatbar-message" onKeyPress={ this.props.addNewMessage } placeholder="Type a message and hit ENTER" />
      </footer>
    );
  }
}

export default chatBar;
