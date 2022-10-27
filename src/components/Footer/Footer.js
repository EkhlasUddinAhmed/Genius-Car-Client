import React from 'react';

const Footer = () => {
    const today=new Date();
    const year=today.getFullYear();
    return (
        <div>
            <p className="text-center"><small>Copy Right Protected @ {year}</small></p>
        </div>
    );
};

export default Footer;