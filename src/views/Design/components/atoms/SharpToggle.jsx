import React, { useState } from 'react';
import cn from 'classnames'

import SharpToggle from 'atoms/SharpToggle'

function RenderSharpToggles() {

  const [isActive, updateIsActive] = useState({red: true, wishlist: true, collection: true})
  const handleClick = color => event => updateIsActive({...isActive, [color]: !isActive[color]})
  return (
    <section>
      <h3 className="molocules__title">SharpToggle</h3>
      <div className="molocules__item">
        <SharpToggle color="red" onClick={handleClick('red')} active={isActive.red}>Favorite</SharpToggle>
        <SharpToggle color="green" onClick={handleClick('green')} active={isActive.green}>Wishlist</SharpToggle>
        <SharpToggle color="blue" onClick={handleClick('blue')} active={isActive.blue}>Collection</SharpToggle>
      </div>
    </section>
  )
}

export default RenderSharpToggles