import React, { useContext } from 'react';
import Titulo from '../Util/Titulo';
import TituloSecundario from '../Util/TituloSecundario';
import Anchor from '../Util/Anchor'
import { IconDownload } from './Icons';
import { UserContext } from '../../userContext';


const Experiencia = () => {
  const { darkAtivo } = useContext(UserContext)

  const listHardSkills = ['HTML', 'CSS', 'Sass', 'JavaScript', 'TypeScript', 'ReactJS', 'Shopify', 'Liquid', 'VTEX IO', 'Google Tag Manager', 'REST API', 'GraphQL', 'jQuery', 'Git', 'Figma']
  const listSoftSkills = ['Detalhista', 'Trabalho em equipe', 'Resiliência', 'Comunicação', 'Criatividade']
  const listIdiomas = ['Inglês: intermediário', 'Espanhol: intermediário']


  return (
    <section className='experiencia' id='experiencia' aria-labelledby='title-experiencia'>
      <div className='container-titulo'>
        <Titulo id='title-experiencia'>Experiência</Titulo>

        <Anchor href="https://drive.google.com/file/d/1-s28dDBVgEFBMFJVVcC6H205XSQY7-xT/view?usp=sharing" title='Baixar currículo em PDF.' aria-label='Baixar currículo.'>
          <IconDownload color={darkAtivo ? '#FAEBEB' : '#210808'} />
          Currículo.PDF
        </Anchor>

      </div>

      <div className='content'>
        <p className='text-01'>Sou Iasmin, desenvolvedora Front-End, com experiência na implementação de e-commerces e na criação de apps customizados.<br /><br />

          Tive a oportunidade de atuar em importantes desafios, como solucionar problemas na regionalização do Supermercado Savegnago/Paulistão e criar um app de página de departamento personalizado para a Olympikus. <br /><br />

          Além disso, sou <strong>detalhista</strong>, replicando layouts pixel por pixel, e com noções de UX/UI. Possuo especial atenção na <strong>responsividade</strong> das páginas, para que sejam bonitas e funcionais em qualquer display.
        </p>
        <div className='box'>
          <p className='box-text-01'>CheckStore</p>
          <p className='box-text-02'>09/2023 - Atualmente</p>
          <p className='box-text-03'>Estou envolvida no suporte e evolução de E-commerces na Shopify, como por exemplo: Korui, Waaw, Kingston, Victoria Sayeg, Hang Loose, Rusty, dentre outros.</p>
        </div>
        <div className='box'>
          <p className='box-text-01'>Avanti</p>
          <p className='box-text-02'>09/2021 - 07/2023</p>
          <p className='box-text-03'>Estive envolvida na implementação e manutenção de E-commerces em VTEX IO, como por exemplo: Olympikus, Smiles, Supermercados Savegnago e Paulistão, WebJóias, Farmácias São João, dentre outros.</p>
        </div>
      </div>

      <TituloSecundario>Hard Skills</TituloSecundario>
      <div className='list-skills'>{listHardSkills.map((item) => <p key={item} className='item-skills'>{item}</p>)}</div>

      <TituloSecundario>Soft Skills</TituloSecundario>
      <div className='list-skills'>{listSoftSkills.map((item) => <p key={item} className='item-skills'>{item}</p>)}</div>

      <TituloSecundario>Idiomas</TituloSecundario>
      <div className='list-skills'>{listIdiomas.map((item) => <p key={item} className='item-skills'>{item}</p>)}</div>
    </section>
  )
}

export default Experiencia;