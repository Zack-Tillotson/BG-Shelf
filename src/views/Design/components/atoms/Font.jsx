import React from 'react';
import cn from 'classnames'

import Font from 'atoms/Font'

function renderFont() {

  return (
    <section>
      <h3 className="molocules__title">Font</h3>
      <div className="molocules__item">
        <Font level="alpha">Alpha Font - it's page head big</Font>
        <Font level="beta">Beta Font - it's important</Font>
        <Font level="charlie">Charlie Font - it's default</Font>
        <Font level="delta">Delta Font - it's something minor</Font>
      </div>
    </section>
  )
}

export default renderFont;