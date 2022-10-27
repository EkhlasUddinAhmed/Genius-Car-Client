import React, { useRef, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Register.css";
import { useCreateUserWithEmailAndPassword,useUpdateProfile } from "react-firebase-hooks/auth";

import auth from "../../firebase.init";

const Register = () => {
  const nameRef = useRef("");
  const emailRef = useRef("");
  const passwordRef = useRef("");
  const navigate = useNavigate();
  const [agree, setAgree] = useState(false);

  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth,{sendEmailVerification:true});


    const [updateProfile, updating, updateError] = useUpdateProfile(auth);

  if (user) {
    console.log(user)
  }

  const registerFormSubmit = async(event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const agree = event.target.terms.checked;

    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName:name });
    navigate("/home", { replace: true });
  };

  return (
    <div>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-sm-8 register-form">
            <h1 className="text-info">Register Yourself</h1>
            <form onSubmit={registerFormSubmit}>
              <div class="mb-3">
                <input
                  type="text"
                  class="form-control"
                  placeholder="Name"
                  required
                  ref={nameRef}
                  autoComplete="off"
                />
              </div>
              <div class="mb-3">
                <input
                  type="email"
                  class="form-control"
                  placeholder="Email"
                  required
                  ref={emailRef}
                  autoComplete="off"
                />
              </div>
              <div class="mb-3">
                <input
                  type="password"
                  class="form-control"
                  placeholder="Password"
                  required
                  ref={passwordRef}
                  autoComplete="off"
                />
              </div>
              <div class="mb-3 form-check">
                <input
                  type="checkbox"
                  class="form-check-input"
                  id="exampleCheck1"
                  name="terms"
                  onClick={() => setAgree(!agree)}
                />
                <label className="form-check-label" for="exampleCheck1">
                  <span
                    className={`ps-2 ${agree ? "text-primary" : "text-danger"}`}
                  >
                    Agree with terms and conditions of Law Anatomy
                  </span>
                </label>
              </div>

              <button 
              type="submit"
               className="btn btn-primary"
               disabled={!agree}
               >
                Register
              </button>
            </form>
            <p>
              Already registered.
              <Link to="/login" className="text-danger pe-auto">
                Go To LogIn Page
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
