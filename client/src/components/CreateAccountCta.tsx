import { Link } from "react-router-dom";

const CreateAccountCta = () => {
    return (
        <div className="card-body mt-0 py-6 items-center ">
            <p className="label-text">
                New user? 
                <Link
                    to={"/create-account"}
                    className="text-secondary underline font-bold pl-1"
                >
                    Create an Account
                </Link>
            </p>
        </div>
    );
};

export default CreateAccountCta;
