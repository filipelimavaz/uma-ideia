import React from 'react'
import './ImageCard.css'

const ImageCard = ({ src, alt }) => {
  return (
    <div className='image-card'>
      <img src={src} alt={alt} />
    </div>
  )
}

export default ImageCard
