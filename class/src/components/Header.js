import React from 'react'

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>NA<span>TE</span>🔌</h1>
      </div>
      <div className="middle">
        <div id='menus'><a href="#">Home</a></div>
        <div id='menus'><a href="#">About</a></div>
        <div id='menus'><a href="#">Projects</a></div>
        <div id='menus'><a href="#">Skills</a></div>
        <div id='menus'><a href="#">Blog</a></div>
      </div>
      <div className="buttons">
        <button className='in'>Sign In</button>
        <button className='up'>Sign Up</button>
      </div>
    </div>
  )
}
export default Header
