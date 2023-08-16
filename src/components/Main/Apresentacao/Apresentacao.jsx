import React from 'react';
import ImageLogoNome from '../../../assets/logo-nome.png'
import ImageLogo from '../../../assets/logo-imagem.png'


const Apresentacao = () => {
  return (
    <section className='apresentacao'>
      <div className='container'>
        <div className='logo-name'><img src={ImageLogoNome} alt="" /></div>
        <div className='logo-imagem'><img src={ImageLogo} alt="" /></div>
      </div>
    </section>
  )
}

export default Apresentacao;