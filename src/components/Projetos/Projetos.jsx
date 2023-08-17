import React from 'react';
import Titulo from '../Util/Titulo';
import ItemProjeto from './ItemProjeto';
import ImageProjeto01 from '../../assets/projeto01.png'
import ImageProjeto02 from '../../assets/projeto02.png'
import ImageProjeto03 from '../../assets/projeto03.png'
import ButtonDefault from '../Util/Button';


const Projetos = () => {

  return (
    <section className='projetos' id='projetos'>

      <Titulo>Projetos</Titulo>
      <p className='text-inicial'>Essa página-currículo também é um projeto. Acesse o repositório <a href="https://github.com/iasminln/curriculo-virtual" target="_blank" rel="noreferrer">AQUI</a>.
      </p>
      <div className='content'>
        <ItemProjeto
          img={ImageProjeto01}
          title='Rede social para pets'
          hover={
            <>
              <p className='text-links'>Projeto feito em ReactJS e Sass, utilizando-se Vite.</p>
              <div className='links-projetos'>
                <a href="https://github.com/iasminln/rede-social-pets" target='_blank' rel="noreferrer"><ButtonDefault>Repositório</ButtonDefault></a>
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
                <a href="https://github.com/iasminln/estudo-cronometro" target='_blank' rel="noreferrer"><ButtonDefault>Repositório</ButtonDefault></a>
                <a href="https://iasminln.github.io/estudo-cronometro/" target='_blank' rel="noreferrer"><ButtonDefault>Acesse</ButtonDefault></a>
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
                <a href="https://github.com/iasminln/pagina-gatos-js" target='_blank' rel="noreferrer"><ButtonDefault>Repositório</ButtonDefault></a>
                <a href="https://iasminln.github.io/pagina-gatos-js/" target='_blank' rel="noreferrer"><ButtonDefault>Acesse</ButtonDefault></a>
              </div>

            </>
          }
        />
      </div>

      <div className='content-btn'>
        <a href='https://github.com/iasminln' target='_blank' rel="noreferrer"><ButtonDefault>Ver mais projetos</ButtonDefault></a>
      </div>
    </section>
  )
}

export default Projetos;