import React from 'react';
import cn from 'classnames'

import Image from 'atoms/Image'

import cutePiggy from 'assets/board-game-piggy/cute-piggy.png'
import piggyDream from 'assets/board-game-piggy/piggy-dreams.png'

function renderImage() {

  return (
    <section>
      <h3 className="molocules__title">Image</h3>
      <div className="molocules__item molocules__image-container">
        <Image src={cutePiggy} />
        <Image src={piggyDream} />
      </div>
      <div className="molocules__item molocules__image-container molocules__image-container--tall">
        <Image src={cutePiggy} />
        <Image src={piggyDream} />
      </div>
    </section>
  )
}

export default renderImage;