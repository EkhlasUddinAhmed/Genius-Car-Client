import React from "react";
import useLoadAllService from "../../Hooks/useLoadAllService";
import { useParams } from "react-router-dom";

const ManageServiceCard = (props) => {
    const {service,deleteServiceMethod}=props.service
  const { name,_id} =service;
  
  const { services, setServices } = useLoadAllService();

  console.log("From Manage service Card:",_id);

//   const deleteServiceMethod = (service_ID) => {
//     const deleteName = `Are You Sure Delete:${name}`;
//     const progress = window.confirm(deleteName);
//     if (progress) {
//         const url=`http://localhost:5000/service/${service_ID}`
//       fetch(url, {
//         method: "DELETE",
//       })
//       .then(res=>res.json())
//       .then(data=>{
//         console.log('in UI from Server:',data)
//         const remaining = services.filter((ser) => ser._id !== service_ID);
//         setServices(remaining);
//       })

     
//     }
//   };
  return (
    <div class="card w-75 mb-3">
      <div class="card-body">
        <h5 class="card-title text-center display-6">{name}</h5>
        <p>{_id}</p>

        <button onClick={()=>deleteServiceMethod(name,_id)} class="btn btn-danger">
          Delete Service
        </button>
      </div>
    </div>
  );
};

export default ManageServiceCard;
