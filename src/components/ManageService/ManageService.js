import React from "react";

import useLoadAllService from "../../Hooks/useLoadAllService";
import ManageServiceCard from "../ManageServiceCard/ManageServiceCard";
import "./ManageService.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const ManageService = () => {
  const { services, setServices } = useLoadAllService();

  const deleteServiceMethod = (name, service_ID) => {
    const deleteName = `Are You Sure Delete:${name}`;
    const progress = window.confirm(deleteName);
    if (progress) {
      const url = `http://localhost:5000/service/${service_ID}`;
      fetch(url, {
        method: "DELETE",
      })
        .then((res) => res.json())
        .then((data) => {
          console.log("in UI from Server:", data);
          const remaining = services.filter((ser) => ser._id !== service_ID);
          setServices(remaining);
          toast("Deleting Successfull !")
        });
    }
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <div className="col-sm-8">
          <h1 className="display-4 text-center text-secondary">
            Manage Service:{services.length}
          </h1>
          {services.map((service) => (
            <ManageServiceCard key={service._id} service={{service,deleteServiceMethod}} />
          ))}
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ManageService;
