import React from 'react'
import { ButtonHome, Dashboard, FlexHome, Logo } from '../ui'
import logoHome from  '../assets/images/logo.png'
import { useNavigate } from 'react-router-dom'


const Home = () => {
  const navigate = useNavigate()

  return (
    <Dashboard>
      <FlexHome>
        <Logo home src={logoHome} />
        <ButtonHome onClick={() => navigate('gifs')}>Enter <i className='bx bxs-right-arrow-square'></i></ButtonHome>
      </FlexHome>
    </Dashboard>
  )
}

export default Home