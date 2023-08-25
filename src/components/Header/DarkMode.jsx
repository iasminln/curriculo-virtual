import React, { useContext } from 'react';
import { IconDarkMode } from './Icons';
import { IconLightMode } from './Icons';
import { UserContext } from '../../userContext';


const DarkMode = () => {
  const { darkAtivo, handleClick } = useContext(UserContext)


  return (
    <div className='dark-mode'>
      {!darkAtivo ?
        <button className='btn-dakr-mode inativo' aria-label='Ativar dark mode' title='Ativar Dark mode' onClick={() => { handleClick('dark') }}>
          <span>
            <IconDarkMode color='#210808' />
          </span>
        </button>
        :
        <button className='btn-dakr-mode ativo' aria-label='Ativar light mode' title='Ativar Light mode' onClick={() => { handleClick('light') }}>
          <span>
            <IconLightMode color='#FAEBEB' />
          </span>
        </button>
      }
    </div>
  )
}

export default DarkMode;