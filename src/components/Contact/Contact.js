import React from 'react';
import auth from '../../firebase.init';
import { useAuthState } from 'react-firebase-hooks/auth';
import TitlePage from '../TitlePage/TitlePage';

const Contact = () => {
    const [user]=useAuthState(auth);
    return (
        <div>
            <TitlePage title={Contact}></TitlePage>
            <h1 className="text-info">This is Contact page</h1>
            <h1>Email:{user?.email}</h1>
        </div>
    );
};

export default Contact;