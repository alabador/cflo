import SignIn from "../components/auth/SignIn"
import SignUp from "../components/auth/SignUp"
import AuthDetails from "../components/AuthDetails"

const LoginPage = () => {
  return (
    <>
        <SignIn />
        <SignUp />
        <AuthDetails />
    </>
  )
}

export default LoginPage