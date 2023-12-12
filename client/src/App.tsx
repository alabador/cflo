import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import LandingPage from "./routes/LandingPage"
import CreateAccountPage from "./routes/CreateAccountPage"
import Home from './routes/Home'
import {Protected} from './routes/Protected'
import AuthContext from './components/AuthContext'
import { useEffect, useState } from 'react'

function App() {
  const [token, setToken] = useState(
    '' || window.sessionStorage.getItem("token"))
  const [isAuthenticated, setIsAuthenticated] = useState(
    false || window.sessionStorage.getItem("auth") === "true"
  )

  const getToken = (newToken) => {
    setToken(newToken)
  }

  const getAuthStatus = (status:boolean) => {
    setIsAuthenticated(status)
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
      />
    }, 
    {
      path: "/create-account",
      element: <CreateAccountPage />
    }, 
    {
      path: "/home",
      element: <Protected auth={isAuthenticated}><Home token={token} 
        isAuthenticated={isAuthenticated}
        authStatus={getAuthStatus}
        /></Protected>
      // element: <Protected><Home token={token}/></Protected>
    }
  ])

  return (
    // <AuthContext>
    //   <RouterProvider router={router} />
    // </AuthContext>
    <RouterProvider router={router} />
  )
}

export default App
