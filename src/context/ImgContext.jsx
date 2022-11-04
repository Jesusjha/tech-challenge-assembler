import axios from "axios";
import React, { createContext, useState, useEffect } from "react";

export const ImgContext = createContext({});

const ImgContextProvider = ({ children }) => {
  const urlGif = import.meta.env.VITE_API_KEY_GIF_URL;
  const apiKeyGif = import.meta.env.VITE_API_KEY_GIF;

  const urlMeme = import.meta.env.VITE_API_KEY_MEME;
  const apiKeyMeme = import.meta.env.VITE_API_KEY_MEME_URL;
  const hostMeme = import.meta.env.VITE_API_KEY_MEME_HOST;

  const [showGif, setShowGif] = useState([]);
  const [showMeme, setShowMeme] = useState([]);

  useEffect(() => {
    gifRender();
  }, []);

  useEffect(() => {
    memeRender();
  }, []);

  const gifRender = async () => {
    await axios
      .get(urlGif + apiKeyGif)
      .then((res) => {
        setShowGif(res.data.data);
        console.log('GIFS', res.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const options = {
    method: 'GET',
    url: urlMeme,
    headers: {
      'X-RapidAPI-Key': apiKeyMeme,
      'X-RapidAPI-Host': hostMeme
    }
  };

  const memeRender = async () => {
    await axios
    .request(options)
    .then((res) => {
      setShowMeme(res.image);
      console.log('MEMES', res.image)
    })
    .catch((error) => {
      console.log(error)
    })
  }

  return (
    <ImgContext.Provider value={{ showGif, showMeme }}>
      {children}
    </ImgContext.Provider>
  );
};

export default ImgContextProvider;
