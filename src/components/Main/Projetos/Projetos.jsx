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
        <ItemProjeto
          img={ImageProjeto01}
          title='Rede social para pets'
          hover={
            <>
              <p className='text-links'>Projeto feito em ReactJS e Sass, utilizando-se Vite.</p>
              <div className='links-projetos'>
                <a href="https://github.com/iasminln/rede-social-pets" target='_blank' rel="noreferrer">Repositório</a>
              </div>

            </>
          }
        />
        <ItemProjeto
          img={ImageProjeto02}
          title='Cronômetro e contagem regressiva'
          hover={
            <>
              <p className='text-links'>Projeto feito com JavaScript puro e Sass.</p>
              <div className='links-projetos'>
                <a href="https://github.com/iasminln/estudo-cronometro" target='_blank' rel="noreferrer">Repositório</a>
                <a href="https://iasminln.github.io/estudo-cronometro/" target='_blank' rel="noreferrer">Acesse</a>
              </div>

            </>
          }
        />
        <ItemProjeto
          img={ImageProjeto03}
          title='Página dos gatos'
          hover={
            <>
              <p className='text-links'>Projeto feito com JavaScript puro para treino de funções. Primeiro projeto de estudo com Sass e display grid.</p>
              <div className='links-projetos'>
                <a href="https://github.com/iasminln/pagina-gatos-js" target='_blank' rel="noreferrer">Repositório</a>
                <a href="https://iasminln.github.io/pagina-gatos-js/" target='_blank' rel="noreferrer">Acesse</a>
              </div>

            </>
          }
        />
      </div>

      <div className='content-btn'> <a className='button' href='https://github.com/iasminln' target='_blank' rel="noreferrer">Ver mais</a></div>
    </section>
  )
}

export default Projetos;