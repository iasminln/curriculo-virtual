import { useState, useContext, useEffect } from 'react';
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

  const colorNavIcons = darkAtivo ? '#FAEBEB' : '#210808'


  const clickOnHtml = ({ target }) => {
    const nav = document.querySelector('.allNav')

    if (!nav.contains(target)) {
      document.body.removeEventListener('click', clickOnHtml);
      setNavActive(false)
    }
  }

  const handleClick = () => {
    setNavActive(!navActive)
    document.body.addEventListener('click', clickOnHtml)
  }


  return (
    <header className='header'>
      <div className='container'>
        <div className='logo-darkmode'>
          <a href="/curriculo-virtual/"><p className='logo-name'>Iasmin<span>.</span></p></a>
          <DarkMode />
        </div>

        <div className='allNav'>
          {isMobile &&
            <button aria-label='Menu' className={`btn-menu ${navActive && 'active'}`} onClick={handleClick}>
              <IconMenu color={colorNavIcons} />
            </button>
          }

          <nav className={`navegacao ${isMobile && 'nav-mobile'} ${navActive && 'active'}`}>
            <ul>
              <li className='nav-item'>
                <a href="#experiencia" onClick={() => setNavActive(false)}>
                  {isMobile && <IconWork color={colorNavIcons} />} Experiência</a>
              </li>
              <li className='nav-item'>
                <a href="#formacao" onClick={() => setNavActive(false)}>
                  {isMobile && <IconStudy color={colorNavIcons} />}Formação</a>
              </li>
              <li className='nav-item'>
                <a href="#projetos" onClick={() => setNavActive(false)}>
                  {isMobile && <IconProjetos color={colorNavIcons} />}Projetos</a>
              </li>
              <li className='nav-item'>
                <a href="#sobre" onClick={() => setNavActive(false)}>
                  {isMobile && <IconSobre color={colorNavIcons} />}Sobre</a>
              </li>
              <li className='nav-item'>
                <a href="#contato" onClick={() => setNavActive(false)}>
                  {isMobile && <IconContato color={colorNavIcons} />}Contato</a>
              </li>
              <li className='nav-item'>
                <a href="#creditos" onClick={() => setNavActive(false)}>
                  {isMobile && <IconCreditos color={colorNavIcons} />}Créditos</a>
              </li>
            </ul>
          </nav>

        </div>
      </div>
    </header>
  )
}

export default Header;