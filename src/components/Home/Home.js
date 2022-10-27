import React, { useEffect, useState } from 'react';
import useLoadAllService from '../../Hooks/useLoadAllService';
import Banner from '../Banner/Banner';
import Experts from '../Experts/Experts';
import Service from '../Service/Service';
import './Home.css';

const Home = () => {

     const { services, 
        setServices}=useLoadAllService();
    // const [services, setServices]=useState([]);
    // useEffect(()=>{

    //     fetch('http://localhost:5000/service/all')
    //     .then(res=>res.json())
    //     .then(data=>{
    //         console.log(data);
    //         setServices(data)
    //     })


    // },[]);
    return (
        <div id="services">
            <Banner></Banner>
            <h1 className="services-title mt-5">Our Services</h1>
            <div className="services-container">
                {
                    services.map(service=><Service
                    key={service._id}
                    service={service}
                    >

                    </Service>)
                }
            </div>
            <Experts/>
        </div>
    );
};

export default Home;