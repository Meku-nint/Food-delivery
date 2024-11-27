import React from 'react'
import './Footer.css'
import { assets } from './admin/assets';
const Footer = () => {
  return (
    <div  className='footer'id="footer">
        <div className='footer-contents'>
            <div className='footer-left'>
            <img src={assets.logo} alt=''/>
            <p>Order your favourite food here</p>
            <div className='social-media'>
                <img src={assets.facebook_icon} alt=''/>
                <img src={assets.twitter_icon} alt=''/>
                </div>
            </div>
            <div className='footer-center'>
                <h2>Company</h2>
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Deliver</li>
                    <li>praivacy</li>
                </ul>
            </div>
            <div className='footer-right'>
                <h2>get in touch</h2>
                <ul>
                    <li>Address addis ababa</li>
                    <li>Phone 0976453</li>
                    <li>Email contactsherger@email</li>
                </ul>
            </div>
        </div>
    </div>
  )
}

export default Footer;