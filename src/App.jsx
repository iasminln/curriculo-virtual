import React from 'react';
import './css/style.scss'

import Main from './components/Main/Main';
import Antigo from './components/Antigo/Antigo';
import { BrowserRouter, Route, Routes } from 'react-router-dom';


const App = () => {
  return (
    <>


      <BrowserRouter>
        
         
          <Routes>
            <Route path='/*' element={<Main />} />
            <Route path='/antigo' element={<Antigo />} />
           
          </Routes>
          
       
      </BrowserRouter>
    </>
  );
};

export default App;