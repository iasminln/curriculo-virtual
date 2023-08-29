// elemento âncora que imita um botão

import React from 'react'

const Anchor = ({ children, ...props }) => {

  return (
    <>
      <a {...props} target='_blank' rel="noreferrer" className='button-default'>{children}</a>
    </>
  )
}

export default Anchor; 