import React from 'react'
import { NavLink } from 'react-router-dom';
import { Container, Row } from 'reactstrap'
import {motion} from 'framer-motion'
import './header.css';
import logo from '../../images/placement.png'
import usericon from '../../images/icon1.png';

const Header = () => {

  const nav_links =[
    { 
      path:"home",
      display:"Home",
    },
    { 
      path:'about',
      display:"About",
    },
    { 
      path:'allcompany',
      display:"AllCompany",
    },
    { 
      path:'alljob',
      display:"All Jobs",
    },
    { 
      path:'contactus',
      display:"Contact Us",
    },
]
  return (
    <header className="header">
      <Container>
        <Row>
          <div className="nav_wrapper">
              <div className="logo">
                <img src={logo} alt="logo"/>
                <div>
                  <h1>Placement Cell</h1>
                </div>
              </div>
              <div className="navigation">
                <ul className="menu">
                  {
                    nav_links.map((item,index)=>(
                      <li className="nav_item" key={index}>
                      <NavLink to={item.path} className={(navClass)=>navClass.isActive ? "nav_active":""}>{item.display}</NavLink>
                  </li>
                    ))
                  }
                </ul>
              </div>

              <div className="nav_icons">
                <span>
                  <NavLink to="login">
                    <motion.img whileTap={{scale: 1.2}} src={usericon} alt="usericon"/>
                  </NavLink>
                </span>
              </div>
              <div className="mobile_menu">
                <span><i class="ri-menu-line"></i></span>
              </div>
          </div>
          
        </Row>
      </Container>
    </header>
  )
}

export default Header
