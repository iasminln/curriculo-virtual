import React from 'react';


const Titulo = ({ children, styleCursive }) => {

  
  return (
    <h1 className='titulo'>
      <span className='titulo-main'>{children}<span className='dot'>.</span></span>
      <span className='titulo-cursive' >{children}</span>
    </h1>
  )
}

export default Titulo;