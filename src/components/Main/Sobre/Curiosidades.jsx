import React from 'react';
import ImageLayout from '../../../assets/pequeno-layout.png'
import TituloSecundario from '../Util/TituloSecundario';
import { Link } from 'react-router-dom';


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
          <Link target='_blank' to="/antigo"><img className='img-layout' src={ImageLayout} alt="Imagem pequena do layout antigo" /></Link>
          <p style={{ fontStyle: 'italic', fontSize: '13px', textAlign: 'center' }}>Perdoe-me, Deus do Design, eu era só uma criança...</p>
        </div>

        <p className='text'>
          Vale lembrar que esse layout antigo não foi feito para ser visualizado no celular, ou seja, ele vai quebrar. Para quem estranhar o tamanho tão pequeno, lembrem que os displays eram de 800 x 600 pixels. 😂 Se você mudar a configuração do seu monitor para 800 x 600, vai ver que fica, ó, <span style={{ fontStyle: 'italic' }}> xuxu beleza.</span> 👌
        </p>

      </div>
    </div>
  )
}

export default Curiosidades;