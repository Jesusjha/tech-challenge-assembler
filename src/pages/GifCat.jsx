import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { ImgContext } from "../context/ImgContext";
import { FlexImg, Image } from "../ui/index";

const GifCat = () => {
const { showGif } = useContext(ImgContext)

const navigate = useNavigate();

const gifs = Array.from(showGif)

  const content = gifs.map((e) => {
    return <Image key={e.id} id={e.id} src={e.images.original.url} />;
  })

  return (
      <FlexImg>
        {content}
      </FlexImg>
  );
};

export default GifCat;
