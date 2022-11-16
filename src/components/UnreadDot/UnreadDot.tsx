import React from 'react';

import style from './UnreadDot.module.css';

const UnreadDot = ({
  show = false,
}: {
  show?: boolean;
}): JSX.Element | null => {
  if (!show) return null;
  return <span className={style.unreadDot} role='status' />;
};

export default UnreadDot;
