import useAuth from 'data/auth/useAuth';

function useInitGate() {
  const auth = useAuth()

  if(!auth.isInitialized) {
    return auth.renderLoadingPage()
  }
  
  if(!auth.isLoggedIn) {
    return auth.renderLoginPage()
  }

  return null
}

export default useInitGate