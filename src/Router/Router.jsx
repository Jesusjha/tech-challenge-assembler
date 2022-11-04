import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { Navbar } from '../components/index'
import { GifCat, Home, MemeCat, Profile } from '../pages/index'


const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path='/' element={<Navbar />}>
        <Route path='gifs' element={<GifCat />} />
        <Route path='memes' element={<MemeCat />} />
        <Route path='profile' element={<Profile />} />
      </Route>
    </Routes>
  )
}

export default Router