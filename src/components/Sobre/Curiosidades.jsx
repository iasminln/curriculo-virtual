import React from 'react';
import ImageLayout from '../../assets/pequeno-layout.png'
import ImageLayoutWebp from '../../assets/pequeno-layout.webp'
import TituloSecundario from '../Util/TituloSecundario';
import ImageWebp from '../Util/ImageWebp';


const Curiosidades = () => {

  return (
    <div className='curiosidades'>
      <TituloSecundario>Curiosidades</TituloSecundario>

      <div className='content-curiosidades'>
        <p className='text'>
          O conceito dessa página-currículo foi criado com base no último design do meu antigo blog. Escolhi uma cor para base e defini o resto da paleta com cores mais agradáveis e que combinavam entre si. Os títulos feitos com sobreposição de fontes e os ícones de setas também tiveram inspiração nesse antigo layout. Nada foi por acaso! Eu queria criar um currículo que não fosse ctrl c + ctrl v e que tivesse alguma personalidade. E de quebra, homenageio a Iasmin de 12 anos que começou essa brincadeira sem imaginar que chegaria até aqui.<br /><br />

          Como parte da experiência, recriei a página que esteve ao ar até 2007 no finado Weblogger, com todo o <span style={{ textDecoration: 'line-through' }}>terrível</span> charme dos anos 2000.
        </p>

        <div className='container-layout'>
          <a href="https://iasminln.github.io/layout-antigo/" target='_blank' rel="noreferrer" aria-label='Link para visualizar o layout antigo.' title='Clique para acessar!'>
            <ImageWebp className='img-layout' src={ImageLayout} srcWebp={ImageLayoutWebp} width='320px' height='320px' alt="Imagem pequena do layout antigo" />
          </a>

          <em style={{ fontSize: '13px', textAlign: 'center' }}>Perdoe-me, Deus do Design, eu era só uma criança...</em>
        </div>

        <p className='text'>
          Vale lembrar que esse layout antigo não foi feito para ser visualizado no celular, ou seja, ele vai quebrar. Para quem estranhar o tamanho tão pequeno, lembrem que os displays eram de 800 x 600 pixels. 😂 Se você mudar a configuração do seu monitor para 800 x 600, vai ver que fica, ó, <em> chuchu beleza.</em> 👌
        </p>

        <p className='text'>Essa página também tem seu próprio repositório e você pode acessá-lo <a href="https://github.com/iasminln/layout-antigo" target="_blank" rel="noreferrer">AQUI</a>. Projeto feito com ReactJS e Sass.
        </p>

      </div>
    </div>
  )
}

export default Curiosidades;