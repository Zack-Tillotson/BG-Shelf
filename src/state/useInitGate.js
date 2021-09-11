import useAuth from 'data/auth/useAuth';
import useCollection from 'data/collection/useCollection'

function useInitGate() {
  const auth = useAuth()
  const collection = useCollection('itemshapes')

  let gateUi = null

  if(!auth.isInitialized) {
    gateUi = auth.renderLoadingPage()
  }
  
  if(!auth.isLoggedIn) {
    gateUi = auth.renderLoginPage()
  }

  if(!collection.meta.isInitialized) {
    gateUi = auth.renderLoadingPage() 
  }

  return gateUi
}

export default useInitGate