import React, { useState } from 'react';
import Titulo from '../Util/Titulo';
import ImageIasmin from '../../../assets/iasmin.jpg'
import ImageLayout from '../../../assets/pequeno-layout.png'
import useMedia from '../../../Hooks/useMedia';
import TituloSecundario from '../Util/TituloSecundario';



const Sobre = () => {
  const isMobile = useMedia('(max-width: 47.5rem)')
  const [curiosidades, setCuriosidades] = useState(false)


  return (
    <section className='sobre' id='sobre'>
      <div className='title-image'>
        <Titulo>Sobre</Titulo>
        {isMobile && <img className='avatar-pequeno' src={ImageIasmin} alt="Avatar de Iasmin" />}
      </div>

      <div className='content-main'>

        <div className='box'>
          <ul>
            <li>Me chamo <span className='destaque'>Iasmin Lisboa Nogueira</span>, tenho 29 anos e moro em Florianópolis, SC.</li>
            <li>Aprendi HTML e CSS em 2006, com uns 12 anos, em tempos pré YouTube e pré Tumblr. Tive um blog e criava todo o design, layout e identidade visual (nos moldes anos 2000: com muito brilho e música de fundo). Mas parei de mexer nisso quando fui pro ensino médio, retornando só na faculdade de engenharia.</li>
            <li>Sou formada em engenharia civil e atuei fazendo projetos hidráulicos e de prevenção contra incêndio, residencial e predial. Mas não estava feliz nessa carreira.</li>
            <li>Comecei a rever e estudar programação em 2018, mas só mudei de carreira oficialmente em 2021. Depois de me aperfeiçoar melhor em desenvolvimento web, quero aprender tecnologias mobile.</li>
          </ul>
        </div>

        {!isMobile && <img className='avatar' src={ImageIasmin} alt="Avatar de Iasmin" />}
      </div>

      <div className='container-btn-curiosidades'>
        <span className='text-btn'> Deseja saber como essa página foi criada? </span>
        <button className='btn-curiosidades' onClick={() => setCuriosidades(!curiosidades)}>{curiosidades ? "Ver menos" : "Ver mais"}</button>
      </div>

      {curiosidades &&
        <div className='curiosidades'>
          <TituloSecundario>Curiosidades</TituloSecundario>

          <div className='content-curiosidades'>
            <p className='text'>Todo o conceito dessa página-currículo foi criado por mim com base no último design do meu antigo blog. Escolhi uma cor para base e defini o resto da paleta com cores mais agradáveis e que combinavam entre si. Os títulos feitos com sobreposição de fontes e os ícones de setas também tiveram inspiração nesse antigo layout. Nada foi por acaso! Eu queria criar uma página que não fosse ctrl c + ctrl v e que tivesse alguma personalidade. E de quebra, homenageio a Iasmin de 12 anos que começou essa brincadeira sem imaginar que chegaria até aqui.<br /><br />

              Como parte da experiência, recriei a página que esteve ao ar até 2007 no finado Weblogger até 2007, com todo o <span style={{ textDecoration: 'line-through' }}>terrível</span> charme dos anos 2000.
            </p>

            <div className='container-layout'>
              <a href="\antigo" target='_blank'>
                <img className='img-layout' src={ImageLayout} alt="Imagem pequena do layout antigo" />
              </a>
              <p style={{ fontStyle: 'italic', fontSize: '13px' }}>Perdoe-me, Deus do Design, eu era criança...</p>
            </div>

            <p className='text'>
              Vale lembrar que esse layout antigo não foi feito para ser visualizado no celular, ou seja, ele vai quebrar. Para quem estranhar o tamanho tão pequeno, lembrem que os displays eram de 800 x 600 pixels. 😂 Se você mudar a configuração do seu monitor para 800x600, vai ver que fica, ó, <span style={{ fontStyle: 'italic' }}> xuxu beleza.</span> 👌
            </p>

          </div>
        </div>
      }

    </section>
  )
}

export default Sobre;