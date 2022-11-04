import { useEffect, useState } from 'react'
import './App.css'
import ImgContextProvider from './context/ImgContext'
import Router from './Router/Router'


function App() {

  return (

    <div className="App">
      <ImgContextProvider>
        <Router />
      </ImgContextProvider>
      {/* <img src={showGif} alt="" />
      <img src={showMeme} alt="" /> */}

    </div>
  )
}

export default App

// API KEY GIPHY = shttps://api.giphy.com/v1/randomid?api_key=OxnYJImzxMxi7qPUtBG36UuPT7r36nK
//API KEY MEMES = https://api.humorapi.com/memes/random?api-key=6006da6111284175814fe91213b27016
