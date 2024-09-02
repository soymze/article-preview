import React from 'react';
import '../styles/ShareButton.css';
import { ReactComponent as ShareIcon } from '../images/icon-share.svg';

const ShareButton = ({ onClick }) => {
  return (
    <button onClick={onClick} className="share-button">
      <ShareIcon />
    </button>
  );
};

export default ShareButton;
