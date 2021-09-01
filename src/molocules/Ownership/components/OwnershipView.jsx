import React from 'react'
import cn from 'classnames'

import ItemMini from 'molocules/ItemMini'
import ListTitle from 'molocules/ListTitle'

const baseCn = 'ownership'

function OwnershipView(props) {
  return (
    <div className={cn(baseCn)}>
      <ItemMini item={props.item} details={false} ownership={props.ownership} />
      <ListTitle button={{type: 'link', children: "+ Add", to: "TODO"}}>
        Acquisitions
      </ListTitle>
      {props.ownership.acquisitions.length === 0 && (
        <div className={`${baseCn}__not-owned`}>
          Not yet acquired.
        </div>
      )}
      {props.ownership.acquisitions.length > 0 && (
        <ol>
          {props.ownership.acquisitions.map(acquisition => (
            <li key={acquisition.date}>
              <div className={cn(`${baseCn}__acquisition`)}>
                <div className="ownership__piece">
                  <div className="ownership__label">Date:</div>
                  <div className="ownership__value">
                    {acquisition.date}
                  </div>
                </div>
                <div>
                  <div className="ownership__label">Price</div>
                  <div className="ownership__value">
                    {acquisition.price}
                  </div>
                </div>
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}

export default OwnershipView