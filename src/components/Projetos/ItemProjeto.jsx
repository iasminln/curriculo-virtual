import React, { useState } from 'react';
import useMedia from '../../Hooks/useMedia';
import { IconDireita } from './Icons'
import { IconEsquerda } from './Icons';

const ItemProjeto = ({ img, title, hover }) => {
  const isMobile = useMedia('(max-width: 47.5rem)')
  const [visibleImg, setVisibleImg] = useState(true)


  return (
    <section className='item-projeto'>
      <div className='box'>
        {isMobile ? visibleImg ? <img src={img} alt={title} /> : null : <img src={img} alt={title} />}
        {isMobile ? !visibleImg ? <div className='text-hover'>{hover}</div> : null : <div className='text-hover'>{hover}</div>}

      </div>

      {isMobile &&
        <div className='container-btn-slide'>
          <button className='btn-slide' disabled={visibleImg ? true : false} onClick={() => { setVisibleImg(true) }}><IconEsquerda /></button>
          <button className='btn-slide' disabled={!visibleImg ? true : false} onClick={() => { setVisibleImg(false) }}><IconDireita /></button>
        </div>
      }
      <p className='title'>{title}</p>

    </section>
  )
}

export default ItemProjeto;