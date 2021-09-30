import React from 'react';
import cn from 'classnames'

import Card from 'atoms/Card'
import Item from 'molocules/Item'

import {
  item1, 
  item2, 
  member1, 
  member2, 
  club1,
  ownership1, 
  ownership2, 
  session1,
  session2,
  acquisitions1,
  acquisitions2,
} from '../../data'

function RenderItem() {
  return (
    <section>
      <h3 className="molocules__title">Item</h3>
      <div className="molocules__item">
        <Item 
          item={item1} 
          member={member1} 
          club={club1} 
          ownership={ownership1} 
          sessions={[session1]} 
          acquisitions={acquisitions1} 
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
      <div className="molocules__item">
        <Item 
          item={item2} 
          member={member1} 
          club={club1} 
          ownership={ownership2} 
          sessions={[session1, session2]} 
          acquisitions={acquisitions2} 
          onToggleFavorite={()=>console.log('toggle fav')}
          onToggleCollection={()=>console.log('toggle collection')}
          onToggleWishlist={()=>console.log('toggle wishlist')}
          onAddSession={()=>console.log('add session')}
          onAddAquisition={()=>console.log('add acquisition')}
          onEditAcquisition={()=>console.log('edit aquisition')} 
          onDeleteAcquisition={()=>console.log('delete acquisition')}
          />
      </div>
    </section>
  )
}

export default RenderItem;