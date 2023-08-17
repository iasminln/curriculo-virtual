import React from 'react';
import Titulo from '../Util/Titulo';
import TituloSecundario from '../Util/TituloSecundario';


const Experiencia = () => {

  const listHardSkills = ['HTML', 'CSS', 'Sass', 'JavaScript', 'TypeScript', 'ReactJS', 'GraphQL', 'jQuery', 'Git', 'VTEX IO']
  const listSoftSkills = ['Detalhista', 'Trabalho em equipe', 'Resiliência', 'Comunicação', 'Criatividade']


  return (
    <section className='experiencia' id='experiencia'>
      <Titulo>Experiência</Titulo>
      <div className='content'>
        <p className='text-01'>Sou Iasmin, desenvolvedora Front-End, com experiência na implementação de e-commerces e na criação de apps customizados.<br /><br />

          Tive a oportunidade de atuar em importantes desafios, como solucionar problemas na regionalização do Supermercado Savegnago/Paulistão e criar um app de página de departamento personalizado para a Olympikus. Além disso, sou detalhista, replicando layouts pixel por pixel, e com noções de UX/UI.</p>
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
    </section>
  )
}

export default Experiencia;