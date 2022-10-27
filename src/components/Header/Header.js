import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";
import { useAuthState } from 'react-firebase-hooks/auth';
import auth from "../../firebase.init";
import { signOut } from 'firebase/auth';
import Header2 from "./Header2/Header2";


const Header = (props) => {
    
  const [user]=useAuthState(auth)

  const signOutMethod=()=>{
    signOut(auth);
    console.log("Signing out Clicked");
  }
    
  return (
    <div>
      <Header2></Header2>
      <nav className="menu text-center">
        
        <Link to="/home">Home</Link>
        <Link to="/about">About</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/addService">AddService</Link>
        <Link to="/manage">ManageService</Link>
        {
          user?<Link onClick={signOutMethod} to="/#">SignOut</Link>
          :
        <Link to="/login">Login</Link>}
        {/* <Link to="/register">Register</Link> */}
      </nav>
    </div>
  );
};

export default Header;
