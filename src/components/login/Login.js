import { useAuth0 } from '@auth0/auth0-react'
import React from 'react'

export const Login = () => {

    const {loginWithRedirect} = useAuth0();
    const handleLogin = () => {
        loginWithRedirect();
    }

  return (
    <button onClick={handleLogin}>Login</button>
    
  )
}