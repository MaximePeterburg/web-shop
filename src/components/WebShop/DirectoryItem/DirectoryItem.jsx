import React from 'react';
import './DirectoryItem.scss';

const DirectoryItem = ({ category }) => {
  const { title, imageUrl } = category;

  return (
    <div className='DirectoryItem-container'>
      <div
        className='Background-image'
        style={{
          backgroundImage: `url(${imageUrl})`
        }}></div>
      <div className='Body'>
        <h2>{title}</h2>
        <p>Shop Now!</p>
      </div>
    </div>
  );
};

export default DirectoryItem;
