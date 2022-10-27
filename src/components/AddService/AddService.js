import React, { useRef } from "react";
import "./AddService.css";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


 const AddService = () => {
   const nameRef = useRef();
   const priceRef = useRef();
   const desRef = useRef();
   const imgRef = useRef();

   const addNewServiceMathod = (event) => {
    event.preventDefault();
    const name = nameRef.current.value;
    const price = priceRef.current.value;
    const description = desRef.current.value;
    const img = imgRef.current.value;

    const  newService = { name, price, description, img };
    console.log("Initial",newService);

    fetch("http://localhost:5000/service", {
      method: "POST",
      body: JSON.stringify(newService),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then(res => res.json())
      .then(data => {
    console.log("IN UI got from server",data);
     nameRef.current.value="";
     priceRef.current.value="";
     desRef.current.value="";
     imgRef.current.value="";
      });

      toast("New Service is Added Successfully !")
  };

  return (
    <div className="container">
      <div className="row justify-content-center">
        <h1 className="text-center text-info display-4">Add Service</h1>
        <div className="col-sm-8">
          <form onSubmit={addNewServiceMathod} className="form-design">
            <div class="mb-3">
              <label for="name" class="form-label">
                Service Name
              </label>
              <input
                type="text"
                class="form-control"
                id="name"
                aria-describedby="nameHelp"
                ref={nameRef}
                required
              />
            </div>
            <div class="mb-3">
              <label for="price" class="form-label">
                Service Price
              </label>
              <input
                type="text"
                class="form-control"
                id="price"
                ref={priceRef}
                required
              />
            </div>
            <div class="mb-3">
              <label for="description" class="form-label">
                Service Description
              </label>
              <input
                type="text"
                class="form-control"
                id="description"
                ref={desRef}
                required
              />
            </div>
            <div class="mb-3">
              <label for="img" class="form-label">
                Service Image
              </label>
              <input
                type="text"
                class="form-control"
                id="img"
                ref={imgRef}
                required
              />
            </div>

            <button type="submit" class="btn btn-info">
              Add A New Service
            </button>
            <ToastContainer />
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddService;
