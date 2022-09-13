import React from 'react';
import { Link } from 'react-router-dom';

export const Home = () => {
  return (
    <div>
      <p>Set of react rendering examples:</p>
      <ul>
        <li>
          <Link to='prop-drilling'>Prop drilling</Link>
        </li>
        <li>
          <Link to='context'>Context</Link>
        </li>
        <li>
          <Link to='hook'>Hook</Link>
        </li>
      </ul>
    </div>
  );
};