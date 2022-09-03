import React from 'react'

export const Header = () => {
  return (
    <div className="header">
      <div className="logo">
        <h1>NA<span>TE</span>🔌</h1>
      </div>
      <div className="middle">
        <div className="one"><a href="#">Home</a></div>
        <div className="two"><a href="#">About</a></div>
        <div className="three"><a href="#">Projects</a></div>
        <div className="four"><a href="#">Skills</a></div>
        <div className="five"><a href="#">blog</a></div>
      </div>
      <div className="buttons">
        <button className='in'>Sign In</button>
        <button className='up'>Sign Up</button>
      </div>
    </div>
  )
}
export default Header
