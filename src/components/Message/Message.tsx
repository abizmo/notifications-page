import React, { PropsWithChildren } from 'react';
import style from './Message.module.css';

const Message = ({ children }: PropsWithChildren) => (
  <div className={style.message}>
    <p>{children}</p>
  </div>
);

export default Message;
