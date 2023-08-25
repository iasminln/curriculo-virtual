import React from 'react';
import Titulo from '../Util/Titulo';
import { IconEmail, IconLinkedin, IconGithub, IconInstagram } from './Icons'


const Contato = () => {


  return (
    <section className='contato' id='contato' aria-labelledby='title-contato'>
      <div className='container'>
        <div className='content-titulo'> <Titulo id='title-contato'>Contato</Titulo></div>

        <div className='conteudo'>
          <p className='text'>Vamos conversar? Entre em contato! 😊</p>
          <div className='links'>
            <a href="https://www.linkedin.com/in/iasminln/" target='_blank' rel="noreferrer" aria-label='Link de contato para linkedin.' ><IconLinkedin/></a>
            <a href="https://github.com/iasminln" target='_blank' rel="noreferrer" aria-label='Link de contato para github.' ><IconGithub/></a>
            <a href="mailto:iasmin.ln94@gmail.com" target='_blank' rel="noreferrer" aria-label='Link de contato para e-mail.' ><IconEmail/></a>
            <a href="https://www.instagram.com/iasminln/" target='_blank' rel="noreferrer" aria-label='Link de contato para instagram.' ><IconInstagram/></a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contato;