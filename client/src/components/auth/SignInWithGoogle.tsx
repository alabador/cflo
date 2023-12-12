import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FaGoogle } from "react-icons/fa"
import { auth, provider } from "../../config/firebase";
import { useNavigate } from "react-router-dom";

const SignInWithGoogle = ({tokenValue, authStatus}) => {
    const navigate = useNavigate()
    
    async function handleSignInWithGoogle () {
        try {
            signInWithPopup(auth, provider)
            .then((result) => {
                // This gives you a Google Access Token. You can use it to access the Google API.
                const credential:any =
                    GoogleAuthProvider.credentialFromResult(result);
                // Access token of user
                const token = credential.accessToken;
                // Signed in User Info
                const user = result.user;
                if(user){                    
                    user.getIdToken().then((tkn) => {
                        tokenValue(tkn)
                        authStatus(true)
                        window.sessionStorage.setItem("token", tkn)
                        window.sessionStorage.setItem("auth", "true")
                        navigate('/home')
                    })
                }
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
                console.log(error, 
                    `Error Code: ${errorCode}
                    Error Message: ${errorMessage}
                    Email: ${email}
                    Credential: ${credential}
                `)
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