import React from 'react'
import { Link } from 'react-router-dom'
import { UserNameText } from '../ui/index'

const Username = () => {
  return (
    <UserNameText as={Link} to='profile'>Churrete</UserNameText>
  )
}

export default Username