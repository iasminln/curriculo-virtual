import React, { useContext } from 'react';
import { IconDarkMode } from './Icons';
import { IconLightMode } from './Icons';
import { UserContext } from '../../userContext';


const DarkMode = () => {
  const { darkAtivo, handleClick } = useContext(UserContext)


  return (
    <div className='dark-mode'>
      {!darkAtivo && <button className='btn-dakr-mode' aria-label='Ativar dark mode' title='Dark mode' onClick={() => { handleClick('dark') }}>
        <IconDarkMode color='#210808' />
      </button>
      }
      {darkAtivo && <button className='btn-dakr-mode' aria-label='Ativar light mode' title='Light mode' onClick={() => { handleClick('light') }}>
        <IconLightMode color='#FAEBEB' />
      </button>
      }
    </div>
  ) 
}

export default DarkMode;