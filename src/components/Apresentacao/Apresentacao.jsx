import React, { useContext } from 'react';
import ImageLogoNome from '../../assets/logo-nome.png'
import ImageLogoNomeDark from '../../assets/logo-nome-darkmode.png'
import ImageLogo from '../../assets/logo-imagem.png'
import ImageLogoDark from '../../assets/logo-imagem-darkmode.png'
import { UserContext } from '../../userContext';
import ImageLogoNomeWebp from '../../assets/logo-nome.webp'
import ImageLogoNomeDarkWebp from '../../assets/logo-nome-darkmode.webp'
import ImageLogoWebp from '../../assets/logo-imagem.webp'
import ImageLogoDarkWebp from '../../assets/logo-imagem-darkmode.webp'
import ImageWebp from '../Util/ImageWebp';


const Apresentacao = () => {
  const { darkAtivo } = useContext(UserContext)


  return (
    <section className='apresentacao'>
      <div className='container'>
        <div className='logo-name'>
          <ImageWebp
            src={darkAtivo ? ImageLogoNomeDark : ImageLogoNome}
            srcWebp={darkAtivo ? ImageLogoNomeDarkWebp : ImageLogoNomeWebp}
            alt='Olá, mundo! Eu me chamo Iasmin e sou Desenvolvedora Front-End.'
            width='auto'
            height='auto'
          />
        </div>
        <div className='logo-imagem'>
          <ImageWebp
            src={darkAtivo ? ImageLogoDarkWebp : ImageLogoWebp}
            srcWebp={darkAtivo ? ImageLogoDark : ImageLogo}
            alt='Imagem de garota ao lado de dispositivos desktop, tablet e mobile.'
            width='auto'
            height='auto'
          />
        </div>
      </div>
    </section>
  )
}

export default Apresentacao;