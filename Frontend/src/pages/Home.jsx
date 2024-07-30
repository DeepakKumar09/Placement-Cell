import React from 'react'
import Helmet from '../components/Helmet/Helmet';
// import { Container, Row, Col } from 'reactstrap';
import HomeSlider from '../components/HomeSlider/HomeSlider';
const Home = () => {
  return <Helmet title={"Home"}>
    <section className='p-0 home_slider_section'>
      <HomeSlider/>
    </section>
  </Helmet>
}

export default Home
