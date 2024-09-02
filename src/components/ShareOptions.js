import React from 'react';
import facebook from '../images/icon-facebook.svg';
import pinterest from '../images/icon-pinterest.svg';
import twitter from '../images/icon-twitter.svg';
import '../styles/ShareOptions.css';


const ShareOptions = () => {
  return (
    <div className="share-options">
      <p className='text'>SHARE</p>
      <img src={facebook} alt="Facebook" className="social-icon" />
      <img src={pinterest} alt="Pinterest" className="social-icon" />
      <img src={twitter} alt="Twitter" className="social-icon" />
    </div>
  );
};

export default ShareOptions;