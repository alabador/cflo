import {createBrowserRouter, RouterProvider} from 'react-router-dom'
import LandingPage from "./routes/LandingPage"
import CreateAccountPage from "./routes/CreateAccountPage"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<LandingPage />
    }, 
    {
      path: "/create-account",
      element: <CreateAccountPage />
    }
  ])

  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
