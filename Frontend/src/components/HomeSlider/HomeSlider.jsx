import React from "react";
import Slider from "react-slick";
import "./homeslider.css";
import { Container, NavLink } from "reactstrap";
// import img from '../../images/p1.png'

const HomeSlider = () => {
  const settings = {
    fade: true,
    speed: 2000,
    autoplaySpeed: 3000,
    infinite: true,
    autoplay: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    pauseOnHover: false,
  };

  return (
    <Slider {...settings} className="home_slider">
      <div className="slider_item slider_item-01 mt0">
        <Container>
          <div className="slider_content">
            <h1 className="  mb-3">Placement Management System</h1>
            <p className="  mb-4">
            A Placement Management System is a software tool used by
                educational institutions and organizations to streamline and
                manage the placement process for students and job seekers.
            </p>
            <button className="btn reserve-btn mt-4">
              <NavLink to="/">More Info</NavLink>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider_item slider_item-02 mt0">
        <Container>
          <div className="slider_content">
            <h1 className="  mb-3">Placement Management System</h1>
            <p className="  mb-4">
            A Placement Management System is a software tool used by
                educational institutions and organizations to streamline and
                manage the placement process for students and job seekers.
            </p>
            <button className="btn reserve-btn mt-4">
              <NavLink to="/">More Info</NavLink>
            </button>
          </div>
        </Container>
      </div>

      <div className="slider_item slider_item-03 mt0">
        <Container>
          <div className="slider_content">
            <h1 className="  mb-3">Placement Management System</h1>
            <p className="  mb-4">
            A Placement Management System is a software tool used by
                educational institutions and organizations to streamline and
                manage the placement process for students and job seekers.
            </p>
            <button className="btn reserve-btn mt-4">
              <NavLink to="/">More Info</NavLink>
            </button>
          </div>
        </Container>
      </div>
    </Slider>
  );
};

export default HomeSlider;
