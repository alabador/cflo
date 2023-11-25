import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import LandingPage from "./routes/LandingPage"
import CreateAccountPage from "./routes/CreateAccountPage"
import Home from './routes/Home'
import {Protected} from './routes/Protected'
import AuthContext from './components/AuthContext'

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<LandingPage />
    }, 
    {
      path: "/create-account",
      element: <CreateAccountPage />
    }, 
    {
      path: "/home",
      element: <Protected><Home /></Protected>
    }
  ])

  return (
    <AuthContext>
      <RouterProvider router={router} />
    </AuthContext>
  )
}

export default App
