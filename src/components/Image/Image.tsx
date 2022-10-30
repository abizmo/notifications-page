import React from 'react';
import style from './Image.module.css';

const Image = ({
  imageUrl,
  alt,
  circle = false,
  onClick = undefined,
}: {
  imageUrl: string;
  alt: string;
  circle?: boolean;
  onClick?: () => void;
}) => {
  const classes = [
    style.container,
    circle ? style.circle : style.square,
    typeof onClick === 'function' ? style.clickable : '',
  ].join(' ');
  return (
    <div className={classes}>
      <img src={imageUrl} alt={alt} />
    </div>
  );
};

export default Image;
