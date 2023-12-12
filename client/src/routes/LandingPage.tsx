import CreateAccountCta from "../components/auth/CreateAccountCta";
import ThemeController from "../components/ThemeController";
import SignIn from "../components/auth/SignIn";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const LandingPage = ({tokenValue, authStatus, isAuthenticated}) => {
  const navigate = useNavigate()

  useEffect(() => {
    if (isAuthenticated) {
      navigate('/home')
    }
  }, [])
  return (
    <div className="hero min-h-screen bg-base-200 px-8">
      <ThemeController />
      <div className="hero-content flex-col lg:flex-row lg:gap-8">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">CFlo</h1>
          <p className="py-6">
            Keep track of all your expenses.
          </p>
        </div>
        <div className="card shrink-0 w-full max-w-sm shadow-2xl bg-base-100">
            <SignIn tokenValue={tokenValue} authStatus={authStatus}/>
            <div className="divider my-0"></div> 
            <CreateAccountCta />
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
