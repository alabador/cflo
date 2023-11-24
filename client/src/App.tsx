import SignIn from "./components/auth/SignIn"
import SignUp from "./components/auth/SignUp"
import AuthDetails from "./components/AuthDetails"
import {Routes, Route, createBrowserRouter, RouterProvider} from 'react-router-dom'
import LandingPage from "./routes/LandingPage"
import LoginPage from "./routes/LoginPage"
import CreateAccountPage from "./routes/CreateAccountPage"

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element:<LandingPage />
    }, 
    {
      path: "/login",
      element: <LoginPage />
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
