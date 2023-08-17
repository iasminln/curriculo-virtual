import React, { useState } from 'react';
import { IconPlay } from './Icons';
import { IconStop } from './Icons';
import { IconClose } from './Icons';


const PlayerMusica = () => {
  const [visibleModal, setVisibleModal] = useState(false)


  return (
    <>

      <div className='container-antigo' >
        <div className='content-antigo'>
          <div className='player-musica'>
            <marquee direction="left"  >
              <p className='text-player'>Scarborough Fair - Paul Cardall</p>
            </marquee>
            <div className='div-buttons'>
              <button onClick={() => { setVisibleModal(true) }}><IconPlay /></button>
              <button onClick={() => { setVisibleModal(true) }}><IconStop /></button>
            </div>
          </div>

          {visibleModal &&
            <div className='background-modal' onClick={() => { setVisibleModal(false) }}>
              <div className='modal-player' onClick={(e) => e.stopPropagation()}>
                <button onClick={() => { setVisibleModal(false) }} className='btn-close'><IconClose /></button>
                <p>Uma boa página dos anos 2000 precisa ter música tocando, não é?</p>
                <p>Se quiser, te convido para escutar Scarborough Fair, uma versão em piano tocada pelo Paul Cardall, a mesma música que tocava aqui antigamente.</p>
                <div className='links-music'>
                  <a className='link-open' href="https://open.spotify.com/track/1yUKXSBgW6caypAmRvyXNZ?si=47856da5b27b44cc" target='_blank' rel="noreferrer">Spotify</a>
                  <a className='link-open' href="https://www.youtube.com/watch?v=CNoBoeg8j4I" target='_blank' rel="noreferrer">Youtube</a>
                </div>

              </div>
            </div>
          }
        </div>
      </div>
    </>
  )
}

export default PlayerMusica;