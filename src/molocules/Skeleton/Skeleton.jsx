import React from 'react'

import Page from 'components/Page'

import './skeleton.scss'

function Skeleton() {
  return (
    <Page className="skeleton">
      <div className="skeleton__hero">&nbsp;</div>
      <div className="skeleton__block">&nbsp;</div>
      <div className="skeleton__block">&nbsp;</div>
    </Page>
  )
}

export default Skeleton