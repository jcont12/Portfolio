import React, {Component} from 'react';
import '../App.css';

class Project extends Component {
  componentdidMount(){
    console.log(this.props.project)
  }
  render(){
    return(
      <div className='project-show'>
        <img className='project-img' src={require('../images/devs4good.jpg')} alt='Devs4good images' /><br/>
        <a href='https://github.com/jcont12/devs4good'><img className='link-img' src={require('../images/Github.jpg')} alt='Devs4good images' /></a>
        <a href='http://devs4good.herokuapp.com/'><img className='link-img' src={require('../images/site.png')} alt='Devs4good images' /></a>
        <p className='project-p'>Provide a platform through which web developers can give back to the community by bringing non-profit visions to life.</p>
      </div>
    )
  }
}

export default Project;
