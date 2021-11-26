import React from 'react';
import './Footer.css';
import Logo from '../../images/logo-1.png';



const Footer = () => {
    return (
        <footer className="footer">
        <div className="l-footer">
        <h3>
        <img className="img-part" src={Logo} alt="" /></h3>
        <p>
        Travel about is the best travel agency; they are spot on with their information and their advice helped me plan the most perfect vacation ever without any doubts and stress. I loved the fact that they were just a message or phone call away if i needed any assistance or advice. </p>
        </div>
        <ul className="r-footer">
        <li>
          <h2>
        Social</h2>
        <ul className="box">
        <li><a href="#">Facebook</a></li>
        <li><a href="#">Twitter</a></li>
        <li><a href="#">Pinterest</a></li>
        <li><a href="#">Dribbble</a></li>
        </ul>
        </li>
        <li className="features">
          <h2>
        Information</h2>
        <ul className="box h-box">
        <li><a href="#">Blog</a></li>
        <li><a href="#">About</a></li>
        <li><a href="#">Certifications</a></li>
        </ul>
        </li>
        <li>
          <h2>
        Legal</h2>
        <ul className="box">
        <li><a href="#">Privacy Policy</a></li>
        <li><a href="#">Terms of Use</a></li>
        <li><a href="#">Contract</a></li>
        </ul>
        </li>
        </ul>
        <div className="b-footer">
        <p>
        All rights reserved by ©CompanyName 2021 </p>
        </div>
        </footer>
        
 
    );
};

export default Footer;