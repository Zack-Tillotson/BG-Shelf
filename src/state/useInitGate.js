import useAuth from 'data/auth/useAuth';

function useInitGate(dependency) {
  const auth = useAuth()

  if(!auth.isInitialized || !dependency) {
    return auth.renderLoadingPage()
  }
  
  if(!auth.isLoggedIn) {
    return auth.renderLoginPage()
  }

  return null
}

export default useInitGate