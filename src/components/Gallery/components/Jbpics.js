import React, { Component } from "react";
import Slider from "react-slick";

import full01 from '../../../assets/images/fulls/01.jpg'
import full01p2 from '../../../assets/images/fulls/01-5.jpg'
import full01p3 from '../../../assets/images/fulls/01-2.jpg'
import full01p4 from '../../../assets/images/fulls/01-3.jpg'
import full01p5 from '../../../assets/images/fulls/01-4.jpg'

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      adaptiveHeight: true,
      arrows: true,
      speed: 300,
      slidesToShow: 1,
      slidesToScroll: 1,
    };
    return (
      <div>
        <Slider {...settings}>
          <div>
          <img className="image fit thumb" src={full01} />
          <h3 style={{ textAlign: 'center' }}> Job-Discount </h3>    
          </div>
          <div>
          <img className="image fit thumb" src={full01p2} />
          <h3 style={{ textAlign: 'center' }}> Here is the connexion page for user and admin</h3>        
          </div>
          <div>
          <img className="image fit thumb" src={full01p3} />
          <h3 style={{ textAlign: 'center' }}>Here is the job board with some offers</h3>
          </div>
          <div>
          <img className="image fit thumb" src={full01p4} />
          <h3 style={{ textAlign: 'center' }}>Here is an exemple of appliance to an offer</h3>
          </div>
          <div>
          <img className="image fit thumb" src={full01p5} />
          <h3 style={{ textAlign: 'center' }}>Here is an exemple of an admin page</h3>
          </div>
        </Slider>
      </div>
    );
  }
}