import React from 'react';
import {BsFacebook, BsInstagram, BsYoutube, BsLinkedin, BsTwitter, BsGithub} from 'react-icons/bs'

const Footer = () => {
  return (
    <div className='footer'>
        <div className="foot">
            <div className="logo">
                <h1>NA<span>TE</span>🔌 </h1>
                <p>Nate is a software develper and UI-UX designer</p>
            </div>
                 <div className="newsletter">
              <h3>BE UP TO DATE</h3>
              <p>recieve the latest information about <span>Web Develeopment</span>,<span>Graphic Design</span>,<span>UI-UX design</span></p>
              <div className="input">
                <input type="text" />
                <button>direction</button>
              </div>
        </div>
            <div className="readers" id='flex'>
                <h3>Readers</h3>
                <a href="#readers">Submit Article</a>
                <a href="#kusoma">Subscribe</a>
            </div>
            <div className="kitu" id='flex'>
                <h3>Resources</h3>
                <a href="#kitu">Home </a>
                <a href="#kitu ">About Me</a>
                <a href="#kitu">Services</a>
                <a href="#kitu">Terms Of Servive</a>
                <a href="#kitu">Privacy Policy</a>
            </div>
            <div className="help" id='flex'>
                <h3>HElp and Support</h3>
                <a href="#contact">Contact Us</a>
                <a href="#contact">Training Classes</a>
                <a href="#contact">Help Desk</a>
                <a href="#contact">Feedback</a>
                <a href="#contact">Network status</a>
                <a href="#contact">FAQ</a>
            </div>
            <div className="addy" id='flex'>
                <h3>Address</h3>
                <div className="phone"> <span>+254 704596380</span></div>
                <div className="email"> <span>Nathanburugu55@gmail.com</span></div>
                <div className="location"> <span>Mpaka Road 090002, Kenya Nairobi</span></div>
                <div className="Building"> <span>West End Point Towers</span></div>
                <div className="Floor"> <span>6th Floor</span></div>
            </div>
        </div>
        <hr />
        <div className="bottom">
            <div className="one"><p>copyrights astrodram internet industry</p></div>
            <div className="socials" id='flex'>
                <div className="icon"><a href="www.facebook.com"><BsFacebook/></a></div>
                <div className="icon"><a href="www.instagram.com"><BsInstagram/></a></div>
                <div className="icon"><a href="www.youtube.com"><BsYoutube/></a></div>
                <div className="icon"><a href="www.linkedin.com"><BsLinkedin/></a></div>
                <div className="icon"><a href="www.twitter.com"><BsTwitter/></a></div>
                <div className="icon"><a href="www.github.com"><BsGithub/></a></div>
            </div>
        </div>
      <div className="curve"></div>
    </div>
  );
}

export default Footer;
