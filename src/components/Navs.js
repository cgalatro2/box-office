import React from 'react';
import { Link } from 'react-router-dom';

const LINKS = [
  { to: '/', text: 'Home' },
  { to: '/starred', text: 'Starred' },
];

const Navs = () => (
  <div>
    <ul>
      {LINKS.map(item => (
        <li key={Math.floor(Math.random() * 100)}>
          <Link to={item.to}>{item.text}</Link>
        </li>
      ))}
    </ul>
  </div>
);

export default Navs;
