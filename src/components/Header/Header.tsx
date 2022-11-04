import React from 'react';

import { Counter } from '../Counter';

import style from './Header.module.css';

interface HeaderProps {
  unreadNotifications: number;
  title: string;
  onReadAll: () => void;
}

const Header = ({ unreadNotifications, title, onReadAll }: HeaderProps) => (
  <header className={style.header}>
    <h1 className={style.headerTitle}>
      {title}
      <Counter>{unreadNotifications}</Counter>
    </h1>
    <button className={style.headerAction} onClick={onReadAll}>
      Mark all as read
    </button>
  </header>
);

export default Header;
