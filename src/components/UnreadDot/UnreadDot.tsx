import React from 'react';

import style from './UnreadDot.module.css';

const UnreadDot = ({ show = true }: { show?: boolean }): JSX.Element | null => {
  if (!show) return null;
  return <span className={style.unreadDot}></span>;
};

export default UnreadDot;
