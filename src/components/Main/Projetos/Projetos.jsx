import React from 'react';
import Titulo from '../Util/Titulo';
import ItemProjeto from './ItemProjeto';
import ImageProjeto01 from '../../../assets/projeto01.png'
import ImageProjeto02 from '../../../assets/projeto02.png'
import ImageProjeto03 from '../../../assets/projeto03.png'


const Projetos = () => {


  return (
    <section className='projetos' id='projetos'>

      <Titulo>Projetos</Titulo>
      <div className='content'>
        <ItemProjeto img={ImageProjeto01} title='Rede social para pets' hover='Texto no hover' />
        <ItemProjeto img={ImageProjeto02} title='Cronômetro e contagem regressiva' hover='Texto no hover 2' />
        <ItemProjeto img={ImageProjeto03} title='Página dos gatos' hover='Texto no hover 3' />
      </div>
      
      <div className='content-btn'> <a className='button' href='https://github.com/iasminln' target='_blank' rel="noreferrer">Ver mais</a></div>
     



    </section>
  )
}

export default Projetos;