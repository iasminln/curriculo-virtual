import React, {useState} from 'react';
import { IconMenu } from './Icons';


const Header = () => {
  const [navActive, setNavActive] = useState(false)
  const isMobile = window.innerWidth < 760 ? true : false

  return (
    <header>
      <div className='container'>
        <p className='logo-name'>Iasmin<span>.</span></p>
        {isMobile && <button className='btn-menu' onClick={()=> setNavActive(!navActive)}> <IconMenu /> </button>} 

        <nav className={`navegacao ${isMobile && 'nav-mobile'} ${navActive && 'active'}`}>
          <ul>
            <li className='nav-item'><a href="#experiencia">Experiência</a></li>
            <li className='nav-item'><a href="#formacao">Formação</a></li>
            <li className='nav-item'><a href="#projetos">Projetos</a></li>
            <li className='nav-item'><a href="#sobre">Sobre</a></li>
            <li className='nav-item'><a href="#contato">Contato</a></li>
            <li className='nav-item'><a href="#credito">Crédito</a></li>
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header;