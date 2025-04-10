import React from 'react'
import  '../../styles/Header.css'

const Header=({login}) => {
  return (
    <div className='header-class'>
        <div className='left'>
          Psotify
        </div>
        <div className='middle'>
          <div>Home</div>
          <div>Predict</div>
          <div>About</div>
        </div>
        <div className='right'>
          {login ? <button className='log-btn'>Logout</button> : <button className='log-btn'>Login</button>}
        </div>
    </div>
  )
}

export default Header
