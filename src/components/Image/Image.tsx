import React from 'react';
import style from './Image.module.css';

export interface ImageProps {
  imageUrl: string;
  alt: string;
  circle?: boolean;
}

const Image = ({ imageUrl, alt, circle = false }: ImageProps) => {
  const classes = [style.container, circle ? style.circle : style.square].join(
    ' ',
  );
  return (
    <div className={classes}>
      <img src={imageUrl} alt={alt} />
    </div>
  );
};

export default Image;
