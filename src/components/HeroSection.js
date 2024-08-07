import React from 'react';
import { Link } from 'react-router-dom';
import '../App.css';
import { Button } from './Button';
import './HeroSection.css';


function HeroSection() {
  return (
    <div className='hero-container'>
      <video className='video-background' src="/videos/video-11.mp4" autoPlay loop muted playsInline />
      <div className='content'>
        <h1>ADVENTURE AWAITS</h1>
        <p>What are you waiting for?</p>
        <div className='hero-btns'>
          <Button className='btns' buttonStyle='btn--outline' buttonSize='btn--large' to='/cards'>
            GET STARTED
          </Button>
          <Button
            className='btns'
            buttonStyle='btn--primary'
            buttonSize='btn--large'
            to='/tutorials'
          >
            Watch tutorials <i className='far fa-play-circle' />
          </Button>
        </div>
      </div>
    </div>
  );
}

export default HeroSection;
