import React, { FC } from 'react';
import { useNavigate } from 'react-router-dom';
import { DirectoryCategory } from '../Directory/Directory';
import './DirectoryItem.styles';
import { BackgroundImage, Body, DirectoryItemContainer } from './DirectoryItem.styles';

export type DirectoryItemProps = {
  category: DirectoryCategory;
};

const DirectoryItem: FC<DirectoryItemProps> = ({ category }) => {
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
