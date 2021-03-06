import { useAuth0 } from '@auth0/auth0-react';
import React from 'react'
import { Login } from './Login';
import { Logout } from './Logout';
import { Profile } from './Profile';


export const Auth = () => {
    const {isAuthenticated} = useAuth0(); 
    return (
      <>
      {
        isAuthenticated ? <>
          <Profile />
          {/* <Logout /> */}
        </>
        : <Login />
      }
      </>
      
    );
}