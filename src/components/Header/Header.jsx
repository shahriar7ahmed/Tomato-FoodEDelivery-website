import React from 'react'
import "./Header.css"

const Header = () => {
  const scrollToMenu = () => {
    const menuSection = document.getElementById('explore-menu');
    if (menuSection) {
      menuSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='header'>
        <div className="header-contents">
            <h2>Order Your Favorite Food Here.</h2>
            <p>Delicious food delivered to your doorstep. Choose from a variety of cuisines. We serve you best and we will satisfy your cravings during experience on delicious food.</p>
            <button onClick={scrollToMenu}>View Menu</button>
        </div>
    </div>
  )
}

export default Header;