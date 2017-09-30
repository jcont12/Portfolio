import React, { Component } from 'react';
import '../App.css';


class Main extends Component {
  constructor(){
    super()
    this.state = {
      currentPage: 'main'
    }
  }
  render(){
    if (this.state.currentPage === 'main') {
    return(
      <div id='main'>
        <img id='main-img' src={require('../images/profile.jpg')} alt='Jorge profile picture' />
        <div id='main-block'>
          <h1 className='main-h1'> Jorge Contreras-Loreto </h1>
          <p id='main-p'> Self-taught programmer. Switched careers and relocated to consolidate my newfound coding passion. But why coding? I am crazy about creating new things and acquiring new skills! I see coding as a skill that has unlimited potential and provides me with a medium to create beautiful and meaningful things that can improve others lives. I have experience managing teams and leading projects and am a firm believer that teams that have more fun communicate better and do better quality work. If you want to reach out for a chat and to share ideas, contact me: 📬 jorgeacontrerasl@gmail.com</p>
        </div>
      </div>
    );
  } else if (this.state.currentPage === 'projects'){
    return(
      <div id='main'>
        <img id='main-img' src={require('../images/profile.jpg')} alt='Jorge profile picture' />
        <div id='main-block'>
        <h1 className='main-h1'> Projects </h1>
        </div>
      </div>
    )
  }
  }
}

export default Main;
