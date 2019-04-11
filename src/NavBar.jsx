import React, {Component} from 'react';

class NavBar extends Component {
  render () {
    return (
      <nav className="navbar">
      <div className='navbar-content'>
        <img className='logo' src="../Imgs/question-logo.png"/> 
        <a href="/" className="navbar-brand">Who Said What</a>
      </div>
      <span className='numUsers'>Logged in Users: {this.props.numUsers}</span>
    </nav>
    );
  }
}

export default NavBar;