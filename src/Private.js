import auth from "./firebase.init";
import {
  useAuthState,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import { Navigate, useLocation } from "react-router-dom";
import Spinner from "./components/Spinner/Spinner";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Private = ({ children }) => {
  const [user, loading] = useAuthState(auth);
  const location = useLocation();
  const [sendEmailVerification] = useSendEmailVerification(auth);

  

  if (loading) {
    return <Spinner />;
  }

  if (!user) {
    return <Navigate to="/login" state={{ from: location }} replace />;
  }

  if (!user.emailVerified) {
    return (
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-8">
            <h3 className="text-danger text-center">
              Your Email is not Verified
            </h3>
            <h5 className="text-success text-center">
              Please Verify Your Email
            </h5>
            
            <button
              className="btn btn-primary"
              onClick={async () => {
                await sendEmailVerification();
                toast("Sent email");
              }}
            >
              Send Verification Email Again
            </button>
            <ToastContainer />
          </div>
        </div>
      </div>
    );
  }

  return children;
};
export default Private;
