import React from 'react';

import Item from 'molocules/Item'

import {
  member1,
} from '../../data'

function RenderItem() {
  return (
    <section>
      <h3 className="molocules__title">Item</h3>
      {member1.ownerships.map((ownership, index) => (
        <div key={index} className="molocules__item">
          <Item 
            item={ownership.item}
            ownership={ownership}
            club={member1.clubs[0]}
            modifiable
            onToggleFavorite={()=>console.log('toggle fav')}
            onToggleCollection={()=>console.log('toggle collection')}
            onToggleWishlist={()=>console.log('toggle wishlist')}
            onAddSession={()=>console.log('add session')}
            onAddAquisition={()=>console.log('add acquisition')}
            onEditAcquisition={()=>console.log('edit aquisition')} 
            onDeleteAcquisition={()=>console.log('delete acquisition')}
            />
        </div>
      ))}
    </section>
  )
}

export default RenderItem;