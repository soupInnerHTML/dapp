/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';
import facebook from '../assets/images/facebook.svg'
import twitter from '../assets/images/twitter.svg'
import youtube from '../assets/images/youtube.svg'
import instagram from '../assets/images/instagram.svg'
import Logo from "./Logo";


const Footer: React.FC = () => {
  return (
    <footer className={'footer'}>
      <div className={'footer__content'}>
        <div className={'footer__content__links'}>
          <a href="#" className="footer__content__link">Privacy Policy</a>
          <a href="#" className="footer__content__link">Terms & Conditions</a>
          <a href="#" className="footer__content__link">Cookie Policy</a>
        </div>

        <Logo className={'footer__logo'}/>

        <div className={'footer__content__socials'}>
          <a href="#" className="footer__content__social">
            <img src={facebook} alt=""/>
          </a>
          <a href="#" className="footer__content__social">
            <img src={twitter} alt=""/>
          </a>
          <a href="#" className="footer__content__social">
            <img src={youtube} alt=""/>
          </a>
          <a href="#" className="footer__content__social">
            <img src={instagram} alt=""/>
          </a>
        </div>
      </div>

      <p className={'footer__copyright'}>©2022 All rights reserved. Powered by Atla</p>
    </footer>
  );
};

export default Footer;
