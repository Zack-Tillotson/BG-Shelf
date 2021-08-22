import React from 'react';
import Button from 'atoms/Button'

import Card from 'atoms/Card'

function renderButtons() {
  
  return (
    <section>
      <hr />
      <h3 className="molocules__title">Button</h3>
      <div className="molocules__item">
        <h4 className="molocules__subtitle">Styles</h4>
        <Button>Basic</Button>
        <Button primary>Primary</Button>
        <Button secondary>Seconary</Button>
        <Button hollow>Hollow</Button>
        <Button tight>Tight</Button>
        <Button wide>Wide</Button>
        <Button minimal>Minimal</Button>
        <Button disabled>Disabled</Button>
        <Button disabled primary>Disabled Primary</Button>
      </div>
      <div className="molocules__item">
        <h4 className="molocules__subtitle">Elements</h4>
        <Button type="button">button type</Button>
        <Button type="link" to="">link type</Button>
        <Button type="anchor" href="#Elements">anchor type</Button>
      </div>
      <div className="molocules__item">
        <h4 className="molocules__subtitle">Etc</h4>
        <Button type="link" to="." minimal>
          <Card>
            <h3>Clickable Card</h3>
            <p>The whole card is clickable</p>
          </Card>
        </Button>
      </div>
    </section>
  )
}

export default renderButtons;