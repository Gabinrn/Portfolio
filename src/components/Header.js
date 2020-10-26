import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'
import sample from '../assets/images/bg.mp4';

const Header = () => (
  <header id="header">
    <div class="bgvids">
    <video class="glass" loop autoPlay muted>
        <source src={sample} type="video/mp4" />
    </video>
    </div>
    <div className="inner">
      <a href="#" className="image avatar">
        <img src={avatar} alt="" />
      </a>
      <h1>
        <strong>I am Gabin NERON</strong>, 
        <br />
        I'm brand new in development, 
        <br />
        I like to discover and learn new things all the time.
      </h1>
    </div>
    <Footer />
  </header>
)

export default Header
