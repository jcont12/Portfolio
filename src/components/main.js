import React, { Component } from 'react';
import '../App.css';


class Main extends Component {
  constructor(){
    super()
    this.state = {
      currentPage: 'projects'
    }
  }
  render(){
    if (this.state.currentPage === 'index') {
    return(
      <div id='main'>
        <img id='index-img' src={require('../images/profile.jpg')} alt='Jorge profile picture' />
        <div id='index-block'>
          <h1 className='index-h1'> Jorge Contreras-Loreto </h1>
          <p id='index-p'> Self-taught programmer. Switched careers and relocated to consolidate my newfound coding passion. But why coding? I am crazy about creating new things and acquiring new skills! I see coding as a skill that has unlimited potential and provides me with a medium to create beautiful and meaningful things that can improve others lives. I have experience managing teams and leading projects and am a firm believer that teams that have more fun communicate better and do better quality work. If you want to reach out for a chat and to share ideas, contact me: 📬 jorgeacontrerasl@gmail.com</p>
        </div>
      </div>
    );
  } else if (this.state.currentPage === 'projects'){
    return(
      <div id='main'>
        <div id='project-block'>
          <h1 className='project-h1'> Projects </h1>
          <div className='project-show'>
            <img className='project-img' src={require('../images/devs4good.jpg')} alt='Devs4good images' />
            <p className='project-p'>Provide a platform through which web developers can give back to the community by bringing non-profit visions to life.</p>
          </div>
          <div className='project-show'>
            <img className='project-img' src={require('../images/chantliMare.jpg')} alt='Chantli Mare images' />
            <p className='project-p'>Webpage developed for Mexican Boutique Hotel in React</p>
          </div>
        </div>
      </div>
    )
  }
  }
}

export default Main;
