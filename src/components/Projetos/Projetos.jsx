import React from 'react';
import Titulo from '../Util/Titulo';
import ItemProjeto from './ItemProjeto';
import ImageProjeto01 from '../../assets/projeto01.jpg'
import ImageProjeto02 from '../../assets/projeto02.jpg'
import ImageProjeto03 from '../../assets/projeto03.jpg'
import ImageProjeto01Webp from '../../assets/projeto01.webp'
import ImageProjeto02Webp from '../../assets/projeto02.webp'
import ImageProjeto03Webp from '../../assets/projeto03.webp'
import Anchor from '../Util/Anchor';


const Projetos = () => {

  return (
    <section className='projetos' id='projetos' aria-labelledby='title-projetos'>

      <Titulo id='title-projetos'>Projetos</Titulo>
      <p className='text-inicial'>Essa página-currículo também é um projeto, feito com ReactJS, Vite e Sass e layout feito no Figma. <a href="https://github.com/iasminln/curriculo-virtual" target="_blank" rel="noreferrer">Acesse o repositório AQUI</a>. Clique nas setas abaixo para navegação.
      </p>
      <div className='content'>
        <ItemProjeto
          imgWebp={ImageProjeto01Webp}
          img={ImageProjeto01}
          width='310px'
          height='250px'
          title='Rede social para pets'
          href='https://iasminln.github.io/rede-social-pets/'
          hover={
            <>
              <p className='text-links'>Projeto feito em ReactJS e Sass, utilizando-se Vite. (em andamento)</p>
              <div className='links-projetos'>
                <Anchor href="https://github.com/iasminln/rede-social-pets">Repositório</Anchor>
                <Anchor href="https://iasminln.github.io/rede-social-pets/">Acesse</Anchor>
              </div>

            </>
          }
        />
        <ItemProjeto
          imgWebp={ImageProjeto02Webp}
          img={ImageProjeto02}
          width='310px'
          height='250px'
          title='Cronômetro e contagem regressiva'
          href='https://iasminln.github.io/estudo-cronometro/'
          hover={
            <>
              <p className='text-links'>Projeto feito com JavaScript puro e Sass.</p>
              <div className='links-projetos'>
                <Anchor href="https://github.com/iasminln/estudo-cronometro">Repositório</Anchor>
                <Anchor href="https://iasminln.github.io/estudo-cronometro/">Acesse</Anchor>
              </div>

            </>
          }
        />
        <ItemProjeto
          imgWebp={ImageProjeto03Webp}
          img={ImageProjeto03}
          width='310px'
          height='250px'
          title='Página dos gatos'
          href='https://iasminln.github.io/pagina-gatos-js/'
          hover={
            <>
              <p className='text-links'>Projeto feito com JavaScript puro para treino de funções. Primeiro projeto de estudo com Sass e display grid.</p>
              <div className='links-projetos'>
                <Anchor href="https://github.com/iasminln/pagina-gatos-js">Repositório</Anchor>
                <Anchor href="https://iasminln.github.io/pagina-gatos-js/">Acesse</Anchor>
              </div>

            </>
          }
        />
      </div>

      <div className='content-btn'>
        <Anchor href='https://github.com/iasminln'>Ver mais projetos</Anchor>
      </div>
    </section>
  )
}

export default Projetos;