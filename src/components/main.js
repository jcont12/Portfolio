import React, { Component } from 'react';
import '../App.css';


class Main extends Component {
  constructor(){
    super()
    this.state = {
      currentPage: 'index'
    }
    this.handleHome = this.handleHome.bind(this);
    this.handleProjects = this.handleProjects.bind(this);
    this.handleResume = this.handleResume.bind(this);
    this.handleContact = this.handleContact.bind(this);
  }

handleHome(){
  this.setState({
    currentPage: 'index'
  })
}

handleProjects(){
  this.setState({
    currentPage: 'projects'
  })
}

handleResume(){
  this.setState({
    currentPage: 'resume'
  })
}

handleContact(){
  this.setState({
    currentPage: 'contact'
  })
}

  render(){
    if (this.state.currentPage === 'index') {
      return(
        <div id='main'>
          <div className='navbar'>
            <h2 onClick={this.handleHome}> Home </h2>
            <h2 onClick={this.handleProjects}> Projects </h2>
            <h2 onClick={this.handleResume}> Resume </h2>
            <h2 onClick={this.handleContact}> Contact </h2>
          </div>
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
          <div className='navbar'>
            <h2 onClick={this.handleHome}> Home </h2>
            <h2 onClick={this.handleProjects}> Projects </h2>
            <h2 onClick={this.handleResume}> Resume </h2>
            <h2 onClick={this.handleContact}> Contact </h2>
          </div>
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
      );
    } else if (this.state.currentPage === 'resume'){
      return(
        <div id='main'>
          <div className='navbar'>
            <h2 onClick={this.handleHome}> Home </h2>
            <h2 onClick={this.handleProjects}> Projects </h2>
            <h2 onClick={this.handleResume}> Resume </h2>
            <h2 onClick={this.handleContact}> Contact </h2>
          </div>
          <div id='resume-block'>
            <img id='resume-img' src={require('../images/professional.jpg')} alt='Devs4good images' />
            <h1 id='resume-h1'> Resume </h1>
            <p id='resume-p'> My path as a professional has been a fun and enlightening adventure. Its scope is as varied as it has been challenging. From working as a mechanic assistant at a car dealership during my high school yeats, to my latest gig as a Jack of All Trades for an up and coming Company, I have always followed the same principles: Hard work, making decisions based on the well being of the Company, and learning from my mistakes.  </p>
          </div>
        </div>
      );
    } else if (this.state.currentPage === 'contact'){
      return(
        <div id='main'>
          <div className='navbar'>
            <h2 onClick={this.handleHome}> Home </h2>
            <h2 onClick={this.handleProjects}> Projects </h2>
            <h2 onClick={this.handleResume}> Resume </h2>
            <h2 onClick={this.handleContact}> Contact </h2>
          </div>
          <div id='contact-block'>
            <h1 id='contact-h1'> Get in Touch </h1>
            <p className='contact-p'>For any additional information, or if you would like to stay in touch with me please feel free to do so at: jorgeacontreasl@gmail.com</p>
          </div>
        </div>
      );
    }
  }
}

export default Main;
