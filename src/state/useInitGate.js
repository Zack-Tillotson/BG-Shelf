import useAuth from 'data/auth/useAuth';

function useInitGate(...dependencies) {
  const auth = useAuth()

  if(!auth.isInitialized || dependencies.findIndex(dep => !dep) !== -1) {
    return auth.renderLoadingPage()
  }
  
  if(!auth.isLoggedIn) {
    return auth.renderLoginPage()
  }

  return null
}

export default useInitGate