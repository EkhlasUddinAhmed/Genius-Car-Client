import React, { useRef } from "react";
import auth from "../../firebase.init";
import { useAuthState, useSignInWithGoogle } from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import Sociallogin from "../Sociallogin/Sociallogin";

import google2 from "../../Genius-Car_Images/google2.png";

import { useSendPasswordResetEmail } from 'react-firebase-hooks/auth';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';
import TitlePage from "../TitlePage/TitlePage";
import Spinner from "../Spinner/Spinner";


const Login = () => {
  const [signInWithGoogle,gooleUser, googleLoading, googleError] = useSignInWithGoogle(auth);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const location = useLocation();
  const emailRef = useRef("");
  const passwordRef = useRef("");
  let errorElement;
  const [
    signInWithEmailAndPassword,
    emailPasswordUser,
    emailPasswordLoading,
    emailPasswordError] = useSignInWithEmailAndPassword(auth);
  const [sendPasswordResetEmail, sending, resetError] = useSendPasswordResetEmail(
    auth
  );
  
const from_URL = location.state?.from?.pathname || "/home";
  

  
  if (gooleUser||emailPasswordUser) {
    navigate(from_URL, { replace: true });
  }
  if(googleLoading||emailPasswordLoading){
    return <Spinner/>
  }

  if(googleError||emailPasswordError){

    errorElement=<p className="text-danger text-center fs-3">Error: {emailPasswordError?.message ||googleError?.message }</p>
              
  }
  const signInWithGoogleMethod = () => {
    signInWithGoogle()
    // signInWithGoogle().then(() => {
    //   // navigate(from_URL, { replace: true });
    //   if(googleUser){
    //     navigate(from_URL, { replace: true });
    //   }
    // });
  };

  const onSubmitHandling = (event) => {
    event.preventDefault();

    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    console.log({ email, password });
    signInWithEmailAndPassword(email, password);
  };

  // const goToRegisterPage=()=>{
  //     navigate('/register',{replace:true})
  // }

  const resetPasswordMethod=async()=>{
    const email = emailRef.current.value;
    if(email){
      await sendPasswordResetEmail(email);
      toast('Sent email');
    }else{
      toast('Please Enter Your Email');
    }
  }


  return (
    <div>
      <TitlePage title="LogIn"></TitlePage>
      <div className="conatiner">
        <h1 className="text-center text-info">LOG IN PLEASE</h1>
        <div className="row justify-content-center">
          <div className="col-sm-8 login-page">
            <form onSubmit={onSubmitHandling}>
              <div class="mb-3">
                <label for="exampleInputEmail1" class="form-label">
                  Email address
                </label>
                <input
                  type="email"
                  class="form-control"
                  id="exampleInputEmail1"
                  aria-describedby="emailHelp"
                  ref={emailRef}
                  required
                />
              </div>
              <div class="mb-3">
                <label for="exampleInputPassword1" class="form-label">
                  Password
                </label>
                <input
                  type="password"
                  class="form-control"
                  id="exampleInputPassword1"
                  ref={passwordRef}
                  required
                />
              </div>
              
              <div className="container">
                <div className="row justify-content-center">
                  <div className="col-sm-5">
                  <button type="submit" class="btn btn-primary">
                Log In
              </button>
                  </div>
                </div>
              </div>
            </form>
            <p>
              New in Genius Car?{" "}
              <Link to="/register" className="text-danger pe-auto">
                Register
              </Link>
            </p>
            <p>Forget password? 
              <Link onClick={resetPasswordMethod} className="text-danger pe-auto">Reset password</Link>
              </p>
          </div>
        </div>
      </div>

      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-9">
            <Sociallogin />
          </div>
        </div>

        {errorElement}
        <div className="row justify-content-center">
          <div className="col-sm-4">
          <button onClick={signInWithGoogleMethod} className="btn btn-info ml-5">
            <img src={google2} alt="" />
         <span className="px-2">GoogleLogIN</span>
      </button>
      <ToastContainer />
          </div>
        </div>
      </div>
      
    </div>
  );
};

export default Login;
