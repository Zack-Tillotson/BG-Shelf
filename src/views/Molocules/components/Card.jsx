import React from 'react';
import cn from 'classnames'

import Card from 'atoms/Card'

const longLorumIpsum = `Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.`

function renderCards() {
  let content = null

  return (
    <section>
      <h3>Card</h3>
      <div className="molocules__item">
        <Card>basic card thing</Card>
      </div>
      <div className="molocules__item">
        <Card>
          <div>
            <h3>Lorum Ipsum</h3>
            <p>{longLorumIpsum}</p>
          </div>
        </Card>
      </div>
    </section>
  )
}

export default renderCards;