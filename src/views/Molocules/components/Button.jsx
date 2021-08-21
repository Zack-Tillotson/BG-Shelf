import React from 'react';
import Button from 'atoms/Button'


function renderButtons() {
  
  return (
    <section>
      <h3>Button</h3>
      <div className="molocules__item">
        <h4>Styles</h4>
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
        <h4>Elements</h4>
        <Button type="button">button type</Button>
        <Button type="link" to="">link type</Button>
        <Button type="anchor" href="#Elements">anchor type</Button>
      </div>
      <div className="molocules__item">
        <h4>Etc</h4>
        <Button Element="h3">h3 element</Button>
      </div>
    </section>
  )
}

export default renderButtons;