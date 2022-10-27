import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Helmet } from 'react-helmet-async';
import TitlePage from '../TitlePage/TitlePage';




const About = () => {
    
    const [user]=useAuthState(auth);
    return (
        <div>
            {/* <Helmet>
                <title>About</title>
            </Helmet> */}
            <TitlePage title="About"></TitlePage>
            <h1 className="text-success">This is About Page</h1>
            <h1>DisplayName:{user?.displayName}</h1>
            
        </div>
    );
};

export default About;