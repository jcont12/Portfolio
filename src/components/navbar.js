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
<h1 id='project-h1'> Projects </h1>
<div className='project-show'>
  <h3> Chantli Mare </h3>
  <img className='project-img' src={require('../images/devs4good.jpg')} alt='Devs4good images' />
  <a href='https://github.com/jcont12/devs4good'><img className='link-img' src={require('../images/Github.jpg')} alt='Devs4good images' /></a>
  <a href='http://devs4good.herokuapp.com/'><img className='link-img' src={require('../images/site.png')} alt='Devs4good images' /></a><
  p className='project-p'>Provide a platform through which web developers can give back to the community by bringing non-profit visions to life.</p>
</div>
<div className='project-show'>
<h3> Chantli Mare </h3>
  <img className='project-img' src={require('../images/chantliMare.jpg')} alt='Chantli Mare images' />
  <a href='https://github.com/jcont12/Chantli-Mare'><img className='link-img' src={require('../images/Github.jpg')} alt='Devs4good images' /></a>
  <a href='http://devs4good.herokuapp.com/'><img className='link-img' src={require('../images/site.png')} alt='Devs4good images' /></a>
  <p className='project-p'> Webpage developed for Mexican Boutique Hotel in React</p>
</div>
<div className='project-show'>
<h3> Portfolio </h3>
  <img className='project-img' src={require('../images/Portfolio.png')} alt='Portfolio images' />
  <a href='https://github.com/jcont12/Portfolio'><img className='link-img' src={require('../images/Github.jpg')} alt='Devs4good images' /></a>
  <a href='http://devs4good.herokuapp.com/'><img className='link-img' src={require('../images/site.png')} alt='Devs4good images' /></a>
  <p className='project-p'>Portfolio Page - Single page application in React</p>
</div>
<div className='project-show'>
<h3> Aidup </h3>
  <img className='project-img' src={require('../images/chantliMare.jpg')} alt='Chantli Mare images' />
  <a href='https://github.com/jcont12/Chantli-Mare'><img className='link-img' src={require('../images/Github.jpg')} alt='Devs4good images' /></a>
  <a href='http://devs4good.herokuapp.com/'><img className='link-img' src={require('../images/site.png')} alt='Devs4good images' /></a>
  <p className='project-p'> Work in Progress </p>
</div>
export default Navbar;
