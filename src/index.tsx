import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Context } from './components/context/Context';
import { Home } from './components/Home';
import { Hook } from './components/hook/Hook';
import { PropDrilling } from './components/prop-drilling/PropDrilling';
import './index.css';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
  <BrowserRouter>
    <Routes>
      <Route index element={<Home />} />
      <Route path='prop-drilling' element={<PropDrilling />} />
      <Route path='context' element={<Context />} />
      <Route path='hook' element={<Hook />} />
    </Routes>
  </BrowserRouter>
);
