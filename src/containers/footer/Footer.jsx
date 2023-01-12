import React from 'react';
import './footer.css';
import gpt3Logo from '../../assets/logo.svg';


const Footer = () => {
  return (
    <div className="skyras13software__footer section__padding">
      <div className="skyras13software__footer-heading">
        <h1 className="gradient__text">Do you want to step into the future before others?</h1>
      </div>
      <div className="skyras13software__footer-btn">
        <p>Request Early Access</p>
      </div>
      <div className="skyras13software__footer-links">
        <div className="skyras13software__footer-links_logo">
          <img src={gpt3Logo} alt="logo" />
          <p>Crechterwoord k12 192 DK Alnknjkcb, All Rightes Reserved</p>
        </div>
        <div className="skyras13software__footer-links_div">
          <h4>Links</h4>
          <p>Overons</p>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="skyras13software__footer-links_div">
          <h4>Company</h4>
          <p>Terms and Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="skyras13software__footer-links_div">
          <h4>Get in touch</h4>
          <p>Terms and Conditions</p>
          <p>Crechterwoord k12 192 DK Alnknjkcb, All Rightes Reserved</p>
          <p>085-132567</p>
          <p>info@payme.net</p>
        </div>
      </div>
      <div className="skyras13software__footer-copyright">
        <p>© 2021 GPT-3. All rights reserved.</p>
      </div>
    </div>
  )
}

export default Footer