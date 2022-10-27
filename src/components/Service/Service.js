import React from "react";
import "./Service.css";
import { useNavigate } from 'react-router-dom';

const Service = ({ service }) => {
  const { _id, name, price, description, img } = service;
const navigate=useNavigate()
const serviceDetailsMethod=(service_id)=>{
  navigate(`/servicedetails/${service_id}`, {replace:true})
}


  return (
    <div className="single-service-container ">
      <img src={img} alt="" />
      <div className="body-service">
        <h2>{name}</h2>
        <h3>Price:{price}</h3>
        <h4>
          <small>{description}</small>
        </h4>
      </div>
      <button onClick={()=>serviceDetailsMethod(_id)} className="btn btn-info fs-3 text-dark">Book: {name}</button>
    </div>
  );
};

export default Service;
