import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import LandingPage from "./routes/LandingPage"
import CreateAccountPage from "./routes/CreateAccountPage"
import Home from './routes/Home'
import {Protected} from './routes/Protected'
import AuthContext from './components/AuthContext'
import { useEffect, useState } from 'react'

function App() {
  const [token, setToken] = useState('')

  const getToken = (newToken) => {
    setToken(newToken)
  }

  useEffect(() => {
    console.log(token)
  }, [token])

  const router = createBrowserRouter([
    {
      path: "/",
      element:<LandingPage tokenValue={getToken}/>
    }, 
    {
      path: "/create-account",
      element: <CreateAccountPage />
    }, 
    {
      path: "/home",
      element: <Protected><Home token={token}/></Protected>
    }
  ])

  return (
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  )
}

export default App
