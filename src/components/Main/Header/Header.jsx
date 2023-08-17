import React, { useState, useEffect } from 'react';
import { IconMenu } from './Icons';
import { IconWork } from './Icons';
import { IconStudy } from './Icons';
import { IconProjetos } from './Icons';
import { IconSobre } from './Icons';
import { IconContato } from './Icons';
import { IconCreditos } from './Icons';
import useMedia from '../../../Hooks/useMedia'


const Header = () => {
  const [navActive, setNavActive] = useState(false)
  const isMobile = useMedia('(max-width: 47.5rem)')


  return (
    <header className='header'>
      <div className='container'>
        <a href="/"><p className='logo-name'>Iasmin<span>.</span></p></a>
        {isMobile &&
          <button aria-label='Menu' className={`btn-menu ${navActive && 'active'}`} onClick={() => setNavActive(!navActive)}>
            <IconMenu />
          </button>
        }

        <nav className={`navegacao ${isMobile && 'nav-mobile'} ${navActive && 'active'}`}>
          <ul>
            <li className='nav-item'><a href="#experiencia" onClick={() => setNavActive(false)}>{isMobile && <IconWork />} Experiência</a></li>
            <li className='nav-item'><a href="#formacao" onClick={() => setNavActive(false)}>{isMobile && <IconStudy />}Formação</a></li>
            <li className='nav-item'><a href="#projetos" onClick={() => setNavActive(false)}>{isMobile && <IconProjetos />}Projetos</a></li>
            <li className='nav-item'><a href="#sobre" onClick={() => setNavActive(false)}>{isMobile && <IconSobre />}Sobre</a></li>
            <li className='nav-item'><a href="#contato" onClick={() => setNavActive(false)}>{isMobile && <IconContato />}Contato</a></li>
            <li className='nav-item'><a href="#credito" onClick={() => setNavActive(false)}>{isMobile && <IconCreditos />}Créditos</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;