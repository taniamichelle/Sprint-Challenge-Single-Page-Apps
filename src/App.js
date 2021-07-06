import React from 'react';
import { NavLink } from 'react-router-dom';

import TabNav from './components/TabNav.js';
import Header from './components/Header.js';
import AppRouter from './components/AppRouter.js';

export default function App() {

  return <main>
    <div className='container'>
      <Header />
      <TabNav />
      <AppRouter />
      <div className='tab-bar'>
        <NavLink exact className="home" to='/'>Home</NavLink>
        <NavLink className="charPage" to='/characters'>Characters</NavLink>
        <NavLink className="locPage" to='/locations'>Locations</NavLink>
        <NavLink className="epPage" to='/episodes'>Episodes</NavLink>
      </div>
    </div>
  </main>
}

