import React from 'react'

const ImageWebp = ({ srcWebp, src, alt, width, height, ...props }) => {

  return (
    <>
      <picture>
        <source srcSet={srcWebp} type="image/webp" />
        <img src={src} alt={alt} width={width} height={height} {...props} />
      </picture>
    </>
  )
}

export default ImageWebp;