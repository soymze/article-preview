import React, { useState } from 'react';
import ShareButton from './ShareButton';
import ShareOptions from './ShareOptions';
import '../styles/ArticlePreview.css';
import drawer from '../images/drawers.jpg';
import profile from '../images/avatar-michelle.jpg';

const ArticlePreview = () => {
  const [isShareVisible, setShareVisible] = useState(false);

  const toggleShare = () => {
    setShareVisible(!isShareVisible);
  };

  return (
    <div className="article-preview">
        <div className='img-container'>
            <img src={drawer} />
        </div>
        <div className='content-container'>
            <h1>Shift the overall look and feel by adding these wonderful touches to furniture in your home</h1>
            <p className='description'>Ever been in a room and felt like something was missing? Perhaps it felt slightly bare and uninviting. I’ve got some simple tips to help you make any room feel complete.</p>
            <div className='footer'>
                <img src={profile} />
                <div className='nameDate'>
                    <p className="author">Michelle Appleton</p>
                    <p className="date">28 Jun 2020</p>
                </div>
                <ShareButton onClick={toggleShare} />
                {isShareVisible && <ShareOptions />}
            </div>
        </div>
    </div>
  );
};

export default ArticlePreview;  // Default export
