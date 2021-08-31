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
            <li key={acquisition.date} className={cn(`${baseCn}__acquistion`)}>
              <div className="ownership__label">Date Acquired:</div>
              <div className="ownership__value">
                {props.ownership.acquisitions[0].dateAcquired}
              </div>
              <div className="ownership__label">Price</div>
              <div className="ownership__value">
                {props.ownership.acquisitions[0].price}
              </div>
            </li>
          ))}
        </ol>
      )}
    </div>
  )
}

export default OwnershipView