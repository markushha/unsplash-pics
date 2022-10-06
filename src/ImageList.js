import React from 'react'
import { Gallery } from 'react-grid-gallery'

function ImageList(props) {
  const newImages = props.images.map(image => {
    return ({
      src: image.urls.regular,
      isSelected: false,
      alt: image.alt_description,
      width: image.width,
      height: image.height
    })
  })

  return (
    <Gallery images={newImages} />
  )
}

export default ImageList
