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

  const colorNavIcons = darkAtivo ? '#FAEBEB' : '#210808'

  const itensNavegacao = [
    {
      nome: 'Experiência',
      href: '#experiencia',
      icon: <IconWork color={colorNavIcons} />
    },
    {
      nome: 'Formação',
      href: '#formacao',
      icon: <IconStudy color={colorNavIcons} />
    },
    {
      nome: 'Projetos',
      href: '#projetos',
      icon: <IconProjetos color={colorNavIcons} />
    },
    {
      nome: 'Sobre',
      href: '#sobre',
      icon: <IconSobre color={colorNavIcons} />
    },
    {
      nome: 'Contato',
      href: '#contato',
      icon: <IconContato color={colorNavIcons} />
    }, {
      nome: 'Créditos',
      href: '#creditos',
      icon: <IconCreditos color={colorNavIcons} />
    }
  ]


  return (
    <header className='header' aria-label='Header'>
      <div className='container'>
        <div className='logo-darkmode'>
          <a href="/curriculo-virtual/">
            <p className='logo-name'>Iasmin<span>.</span></p>
          </a>
          <DarkMode />
        </div>

        <div className='allNav'>
          {isMobile &&
            <button aria-label='Abrir menu' className={`btn-menu ${navActive && 'active'}`} onClick={handleClick}>
              <IconMenu color={colorNavIcons} />
            </button>
          }

          <nav aria-label='Menu Principal' className={`navegacao ${isMobile && 'nav-mobile'} ${navActive && 'active'}`}>
            <ul>
              {itensNavegacao.map(({ nome, href, icon }) => {
                return (
                  <li key={nome} className='nav-item'>
                    <a href={href} onClick={() => setNavActive(false)}>
                      {isMobile && icon}{nome}
                    </a>
                  </li>
                )
              })}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header;