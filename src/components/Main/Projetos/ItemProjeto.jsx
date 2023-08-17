import React from 'react';

const ItemProjeto = ({ img, title, hover }) => {


  return (
    <section className='item-projeto'>
      <div className='box'>
        <img src={img} alt={title} />
        <div className='text-hover'>{hover}</div>
      </div>

      <p className='title'>{title}</p>

    </section>
  )
}

export default ItemProjeto;