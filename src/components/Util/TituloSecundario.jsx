import React from 'react';
import ImageSetas from '../../assets/setas.png'


const TituloSecundario = ({ children }) => {
  return (
    <h2 className='titulo-secundario'>
      <img src={ImageSetas} />
      <span className='titulo-main'>{children}<span className='dot'>.</span></span>
    </h2>
  )
}

export default TituloSecundario;