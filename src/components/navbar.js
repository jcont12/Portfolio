import React, { Component } from 'react';
import '../App.css';

class Navbar extends Component{
  render(){
    return(
      <div id='navbar'>
        <h2> Home </h2>
        <h2> Projects </h2>
        <h2> Resume </h2>
        <h2> Contact </h2>
      </div>
    )
  }
}

export default Navbar;
