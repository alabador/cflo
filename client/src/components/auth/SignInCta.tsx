import { Link } from "react-router-dom"

const SignInCta = () => {
  return (
    <div className="card-body mt-0 py-6 items-center ">
            <p className="label-text">
                Have an account? 
                <Link
                    to={"/"}
                    className="text-secondary underline font-bold pl-1"
                >
                    Sign In
                </Link>
            </p>
        </div>
  )
}

export default SignInCta