import SignIn from "../components/auth/SignIn"
import SignUp from "../components/auth/SignUp"
import AuthDetails from "../components/AuthDetails"

const LoginPage = () => {
  return (
    <>
      <h1>This is the login route /login</h1>
      <SignIn />
      <SignUp />
      <AuthDetails />
    </>
  )
}

export default LoginPage