import React from 'react';
import { PortalWithState } from 'react-portal';
import { useDispatch } from 'react-redux';

import actions from 'state/actions'

import Button from 'atoms/Button'

import ItemSelectorPane from './components/ItemSelectorPane';

import './item-selector.scss'

const CLASS_PORTAL_OPEN = '--portal-open'

function ItemSelector(props) {
  const {buttonLabel = 'Add Item'} = props

  const dispatch = useDispatch()

  const handlePortalOpen = () => {
    dispatch(actions.formInitialized())
    document.getElementById('root').classList.add(CLASS_PORTAL_OPEN)
    document.getElementById('root').setAttribute('aria-hidden', true)
  }
  const handlePortalClose = () => {
    document.getElementById('root').classList.remove(CLASS_PORTAL_OPEN)
    document.getElementById('root').removeAttribute('aria-hidden')
  }
  return (
    <PortalWithState closeOnOutsideClick closeOnEsc onOpen={handlePortalOpen} onClose={handlePortalClose}>
      {({ openPortal, closePortal, isOpen, portal }) => (
        <React.Fragment>
          <Button onClick={openPortal} primary>
            {buttonLabel}
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