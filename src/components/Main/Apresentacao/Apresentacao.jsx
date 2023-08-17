import React, { useContext } from 'react';
import ImageLogoNome from '../../../assets/logo-nome.png'
import ImageLogoNomeDark from '../../../assets/logo-nome-darkmode.png'
import ImageLogo from '../../../assets/logo-imagem.png'
import ImageLogoDark from '../../../assets/logo-imagem-darkmode.png'
import { UserContext } from '../../../userContext';


const Apresentacao = () => {
  const { darkAtivo } = useContext(UserContext)


  return (
    <section className='apresentacao'>
      <div className='container'>
        <div className='logo-name'>
          <img src={darkAtivo ? ImageLogoNomeDark : ImageLogoNome} alt="" />
        </div>
        <div className='logo-imagem'>
          <img src={darkAtivo ? ImageLogoDark : ImageLogo} alt="" />
        </div>
      </div>
    </section>
  )
}

export default Apresentacao;