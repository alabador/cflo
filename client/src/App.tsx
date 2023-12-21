import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import LandingPage from "./routes/LandingPage"
import CreateAccountPage from "./routes/CreateAccountPage"
import Home from './routes/Home'
import {Protected} from './routes/Protected'
import { useEffect, useState } from 'react'

export interface userInfo {
  userId: string,
  email: string
}

function App() {
  const [token, setToken] = useState(
    '' || window.sessionStorage.getItem("token"))
  const [isAuthenticated, setIsAuthenticated] = useState(
    false || window.sessionStorage.getItem("auth") === "true"
  )
  const [userInfo, setUserInfo] = useState(
    {
      userId : '',
      email: ''
    } ||
    JSON.parse(window.sessionStorage.getItem('userInfo')!)
  )

  const getToken = (newToken) => {
    setToken(newToken)
  }

  const getAuthStatus = (status:boolean) => {
    setIsAuthenticated(status)
  }

  const getUserInfo = (info:userInfo) => {
    setUserInfo(info)
  }

  useEffect(() => {
    // console.log(token)
  }, [token])

  const router = createBrowserRouter([
    {
      path: "/",
      element:<LandingPage 
        tokenValue={getToken}
        authStatus={getAuthStatus}
        isAuthenticated={isAuthenticated}
        userInfo={getUserInfo}
      />
    }, 
    {
      path: "/create-account",
      element: <CreateAccountPage 
        tokenValue={getToken} 
        authStatus={getAuthStatus}
        isAuthenticated={isAuthenticated}
      />
    }, 
    {
      path: "/home",
      element: <Protected auth={isAuthenticated}><Home token={token} 
        isAuthenticated={isAuthenticated}
        authStatus={getAuthStatus}
        userInfo={userInfo}
        /></Protected>
    }
  ])

  return (
    <RouterProvider router={router} />
  )
}

export default App
