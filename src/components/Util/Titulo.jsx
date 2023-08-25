import React from 'react';


const Titulo = ({ children, id }) => {


  return (
    <h1 className='titulo' id={id}>
      <span className='titulo-main'>{children}<span className='dot'>.</span></span>
      <span className='titulo-cursive' aria-hidden="true">{children}</span>
    </h1>
  )
}

export default Titulo;