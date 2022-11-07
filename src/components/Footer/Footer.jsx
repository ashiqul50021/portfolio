import React from 'react';
import './Footer.css';
const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__container container">
                <h1 className="footer__title">Ashiqul Islam</h1>
                <ul className="footer__list">
                    <li><a href="#about" className="footer__link">About</a></li>
                    <li><a href="#about" className="footer__link">Portfolio</a></li>
                    <li><a href="#about" className="footer__link">Service</a></li>
                </ul>
                <div className="footer__social">
                    <a href="/" className='footer__social-link' target="_blank">
                        <i class="bx bxl-facebook"></i>
                    </a>
                    <a href="/" className='footer__social-link' target="_blank">
                        <i class="bx bxl-linkedin"></i>
                    </a>
                    <a href="/" className='footer__social-link' target="_blank">
                        <i class="bx bxl-github"></i>
                    </a>
                </div>
                <span className="footer__copy">&#169; Crypticalcoder. All rigths reserved</span>
            </div>
        </footer>
    );
};

export default Footer;