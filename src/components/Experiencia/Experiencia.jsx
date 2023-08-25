import React, { useContext } from 'react';
import Titulo from '../Util/Titulo';
import TituloSecundario from '../Util/TituloSecundario';
import ButtonDefault from '../Util/Button';
import { IconDownload } from './Icons';
import { UserContext } from '../../userContext';


const Experiencia = () => {
  const { darkAtivo } = useContext(UserContext)

  const listHardSkills = ['HTML', 'CSS', 'Sass', 'JavaScript', 'TypeScript', 'ReactJS', 'REST API', 'GraphQL', 'jQuery', 'Git', 'VTEX IO', 'Google Tag Manager', 'Figma']
  const listSoftSkills = ['Detalhista', 'Trabalho em equipe', 'Resiliência', 'Comunicação', 'Criatividade']
  const listIdiomas = ['Inglês: intermediário', 'Espanhol: intermediário']


  return (
    <section className='experiencia' id='experiencia' aria-labelledby='title-experiencia'>
      <div className='container-titulo'>
        <Titulo id='title-experiencia'>Experiência</Titulo>

        <a href="https://drive.google.com/file/d/1-s28dDBVgEFBMFJVVcC6H205XSQY7-xT/view?usp=sharing" target='_black'>
          <ButtonDefault style={{ display: 'flex', alignItems: 'center' }} title='Baixar currículo em PDF.' aria-label='Baixar currículo de Iasmin em PDF.' >
            <IconDownload color={darkAtivo ? '#FAEBEB' : '#210808'} />
            Currículo.PDF
          </ButtonDefault>
        </a>

      </div>

      <div className='content'>
        <p className='text-01'>Sou Iasmin, desenvolvedora Front-End, com experiência na implementação de e-commerces e na criação de apps customizados.<br /><br />

          Tive a oportunidade de atuar em importantes desafios, como solucionar problemas na regionalização do Supermercado Savegnago/Paulistão e criar um app de página de departamento personalizado para a Olympikus. Além disso, sou <b>detalhista</b>, replicando layouts pixel por pixel, e com noções de UX/UI. Possuo especial atenção na <b>responsividade</b> das páginas, para que sejam bonitas e funcionais em qualquer display.</p>
        <div className='box'>
          <p className='box-text-01'>Desenvolvedora Front-End - Avanti</p>
          <p className='box-text-02'>09/2021 - 07/2023</p>
          <p className='box-text-03'>Estive envolvida na implementação e manutenção de E-commerces em VTEX IO, como por exemplo: Olympikus, Supermercados Savegnago e Paulistão, Smiles, WebJóias, Farmácias São João, dentre outros.</p>
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