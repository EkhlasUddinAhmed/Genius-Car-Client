import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';

const Servicedetails = () => {
    const [serviceDetails, setServiceDetails]=useState([])

    const {id}=useParams();
    const navigate=useNavigate();
    useEffect(()=>{
        const url=`http://localhost:5000/service/${id}`;
        fetch(url)
        .then(res=>res.json())
        .then(data=>{
            console.log(data[0]);
             setServiceDetails(data[0])
        })
    },[id]);

    const checkOutMethod=()=>{
        navigate('/checkout',{replace:true});
    }

    return (
        <div>
            <h1 className="text-secondary text-center display-3">You Are about to Book:{serviceDetails.name}</h1>
            <button onClick={checkOutMethod} className="btn btn-success">Check Out</button>
        </div>
    );
};

export default Servicedetails;