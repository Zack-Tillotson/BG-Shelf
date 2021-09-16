import useAuth from 'data/auth/useAuth';
import useCollection from 'data/collection/useCollection'

function useInitGate() {
  const auth = useAuth()
  const shapes = useCollection(['itemshapes'])

  if(!auth.isInitialized) {
    return auth.renderLoadingPage()
  }
  
  if(!auth.isLoggedIn) {
    return auth.renderLoginPage()
  }

  if(!shapes) {
    return auth.renderLoadingPage() 
  }

  return null
}

export default useInitGate