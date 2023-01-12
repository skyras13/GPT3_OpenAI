import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.svg';
import './navbar.css';

// BEM -> block element modifier

const Menu = () => (
  <>
    <p><a href="#home">Home</a></p>
    <p><a href="#wgpt3">What is GPT?</a></p>
    <p><a href="#possibility">Open AI</a></p>
    <p><a href="#features">Case Studies</a></p>
    <p><a href="#blog">Library</a></p>
  </>
)

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false)

  return (
    <div className="skyras13software__navbar">
      <div className="skyras13software__navbar-links">
        <div className="skyras13software__navbar-links_logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="skyras13software__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="skyras13software__navbar-sign">
          <p>Sign in</p>
          <button type="button">Sign up</button>
      </div>
      <div className="skyras13software__navbar-menu">
        {toggleMenu
          ? <RiCloseLine color="#fff" size={27} onClick={() => setToggleMenu(false)}/>
          : <RiMenu3Line color="#fff" size={27} onClick={() => setToggleMenu(true)}/>
        }
        {toggleMenu && (
          <div className="skyras13software__navbar-menu_container scale-up-center">
            <div className="skyras13software__navbar-menu_container-links">
              <Menu />
            </div>
            <div className="skyras13software__navbar-menu_container-links-sign">
              <p>Sign in</p>
              <button type="button">Sign up</button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default Navbar