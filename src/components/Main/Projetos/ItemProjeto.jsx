import React from 'react';

const ItemProjeto = ({ img, title, hover }) => {


  return (
    <section className='item-projeto'>
      <div className='box'>
        <img src={img} alt={title} />
        <p className='text-hover'>{hover}</p>
      </div>

      <p className='title'>{title}</p>

    </section>
  )
}

export default ItemProjeto;