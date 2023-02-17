import React from 'react';
import DirectoryItem from '../DirectoryItem/DirectoryItem';
import './Directory.scss';

const Directory = ({ categories }) => {
  return (
    <div className='Directory-container'>
      {categories.map((category) => (
        <DirectoryItem key={category.id} category={category} />
      ))}
    </div>
  );
};

export default Directory;
