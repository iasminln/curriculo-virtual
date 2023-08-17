import React, { useState, useContext } from 'react';
import { IconMenu } from './Icons';
import { IconWork } from './Icons';
import { IconStudy } from './Icons';
import { IconProjetos } from './Icons';
import { IconSobre } from './Icons';
import { IconContato } from './Icons';
import { IconCreditos } from './Icons';
import useMedia from '../../Hooks/useMedia'
import DarkMode from './DarkMode';
import { UserContext } from '../../userContext';


const Header = () => {
  const [navActive, setNavActive] = useState(false)
  const isMobile = useMedia('(max-width: 47.5rem)')
  const { darkAtivo } = useContext(UserContext)


  return (
    <header className='header'>
      <div className='container'>
        <div className='logo-darkmode'>
          <a href="/curriculo-virtual/"><p className='logo-name'>Iasmin<span>.</span></p></a>
          <DarkMode />
        </div>

        {isMobile &&
          <button aria-label='Menu' className={`btn-menu ${navActive && 'active'}`} onClick={() => setNavActive(!navActive)}>
            <IconMenu color={darkAtivo ? '#FAEBEB' : '#210808'} />
          </button>
        }

        <nav className={`navegacao ${isMobile && 'nav-mobile'} ${navActive && 'active'}`}>
          <ul>
            <li className='nav-item'>
              <a href="#experiencia" onClick={() => setNavActive(false)}>
                {isMobile && <IconWork color={darkAtivo ? '#FAEBEB' : '#210808'} />} Experiência</a>
            </li>
            <li className='nav-item'>
              <a href="#formacao" onClick={() => setNavActive(false)}>
                {isMobile && <IconStudy color={darkAtivo ? '#FAEBEB' : '#210808'} />}Formação</a></li>
            <li className='nav-item'>
              <a href="#projetos" onClick={() => setNavActive(false)}>
                {isMobile && <IconProjetos color={darkAtivo ? '#FAEBEB' : '#210808'} />}Projetos</a>
            </li>
            <li className='nav-item'>
              <a href="#sobre" onClick={() => setNavActive(false)}>
                {isMobile && <IconSobre color={darkAtivo ? '#FAEBEB' : '#210808'} />}Sobre</a></li>
            <li className='nav-item'>
              <a href="#contato" onClick={() => setNavActive(false)}>
                {isMobile && <IconContato color={darkAtivo ? '#FAEBEB' : '#210808'} />}Contato</a>
            </li>
            <li className='nav-item'>
              <a href="#credito" onClick={() => setNavActive(false)}>
                {isMobile && <IconCreditos color={darkAtivo ? '#FAEBEB' : '#210808'} />}Créditos</a>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;