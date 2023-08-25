import React from 'react'
import useMedia from '../../Hooks/useMedia'


const ImageWebp = ({ srcWebp, src, alt, width, height, srcWebpMobile, media, ...props }) => {

  const isMobile = useMedia(`(max-width: ${media} )`)

  return (
    <>
      <picture>
        <source srcSet={isMobile ? srcWebpMobile ? srcWebpMobile : srcWebp : srcWebp} type="image/webp" />
        <img src={src} alt={alt} width={width} height={height} {...props} />
      </picture>
    </>
  )
}

export default ImageWebp;