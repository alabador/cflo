import ThemeController from '../components/ThemeController'
import SignInCta from '../components/auth/SignInCta'
import SignUp from '../components/auth/SignUp'

const CreateAccountPage = ({tokenValue, authStatus, isAuthenticated}) => {
  return (
    <main className='w-full min-h-screen flex flex-col justify-center items-center'>
        <ThemeController />
        <h1 className='mb-8 mt-2 text-2xl font-bold'>Create an Account</h1>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
          <SignUp tokenValue={tokenValue} authStatus={authStatus} isAuthenticated={isAuthenticated}/>
          <div className="divider my-0"></div> 
          <SignInCta />
        </div>
    </main>
  )
}

export default CreateAccountPage