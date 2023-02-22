import React from 'react';
import { useNavigate } from 'react-router-dom';
import './DirectoryItem.styles.jsx';
import {
  BackgroundImage,
  Body,
  DirectoryItemContainer
} from './DirectoryItem.styles.jsx';

const DirectoryItem = ({ category }) => {
  const { title, imageUrl, route } = category;
  const navigation = useNavigate();
  const onNavigateHandler = () => {
    navigation(route);
  };
  return (
    <DirectoryItemContainer onClick={onNavigateHandler}>
      <BackgroundImage imageUrl={imageUrl}></BackgroundImage>
      <Body>
        <h2>{title}</h2>
        <p>Shop Now!</p>
      </Body>
    </DirectoryItemContainer>
  );
};

export default DirectoryItem;
