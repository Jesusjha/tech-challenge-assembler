import React, { useContext } from 'react'
import { ImgContext } from '../context/ImgContext'

const MemeCat = () => {

  const {showMeme} = useContext(ImgContext)

  const memes = Array.from(showMeme)

  const content = memes.map((e) => {
    return (
      <img key={e.id} id={e.id} src={e.data} />
    )
  })

  return (
    <div>
      {content}
    </div>
  )
}

export default MemeCat