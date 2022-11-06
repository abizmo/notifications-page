import React from 'react';

import style from './Counter.module.css';

const Counter = ({ children }: React.PropsWithChildren) => (
  <span className={style.container}>{children}</span>
);

export default Counter;
