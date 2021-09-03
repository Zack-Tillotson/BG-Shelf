import React from 'react';
import { PortalWithState } from 'react-portal';

import Button from 'atoms/Button'

import ItemSelectorPane from './components/ItemSelectorPane';

const CLASS_PORTAL_OPEN = '--portal-open'

function ItemSelector(props) {
  const handlePortalOpen = () => {
    document.getElementById('root').classList.add(CLASS_PORTAL_OPEN)
  }
  const handlePortalClose = () => {
    document.getElementById('root').classList.remove(CLASS_PORTAL_OPEN)
  }
  return (
    <PortalWithState closeOnOutsideClick closeOnEsc onOpen={handlePortalOpen} onClose={handlePortalClose}>
      {({ openPortal, closePortal, isOpen, portal }) => (
        <React.Fragment>
          <Button onClick={openPortal}>
            Open Portal
          </Button>
          {portal(
            <ItemSelectorPane onClose={closePortal} {...props} />
          )}
        </React.Fragment>
      )}
    </PortalWithState>
  )
}

export default ItemSelector;