import React, { useEffect } from 'react';
import './css/style.scss'
import Main from './components/Main/Main';
import Antigo from './components/Antigo/Antigo';
import { HashRouter, Route, Routes } from 'react-router-dom';
import { UserStorage } from './userContext';


const App = () => {

  useEffect(() => {
    const olharLocal = location.pathname
    if (olharLocal === '/antigo') document.body.classList.add('body-antigo')
  }, [])


  return (
    <>
      <HashRouter>
        <UserStorage>
          <Routes>
            <Route path='/*' element={<Main />} />
            <Route path='/antigo' element={<Antigo />} />
          </Routes>
        </UserStorage>
      </HashRouter>
    </>
  );
};

export default App;