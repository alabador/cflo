import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FaGoogle } from "react-icons/fa"
import { auth, provider } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

const SignInWithGoogle = () => {
    const navigate = useNavigate()
    
    async function handleSignInWithGoogle () {
        try {
            signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential:any =
                    GoogleAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                // The signed-in user info.
                const user = result.user;
                navigate('/home')
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential =
                    GoogleAuthProvider.credentialFromError(error);
            });

        } catch (error) {
            console.log(error)  
        }
    }

    return (
        <button type="button" className="btn btn-secondary w-full" onClick={handleSignInWithGoogle}>
            Sign in with Google <FaGoogle />
        </button>
    )
}

export default SignInWithGoogle