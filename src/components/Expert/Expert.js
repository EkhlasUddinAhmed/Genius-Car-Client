import React from "react";

const Expert = ({ expert }) => {
  const { name, id, img } = expert;
  return (
    <div className=" g-5 col-sm-12  col-md-6 col-lg-4">
      <div class="card" style={{ width: "18rem" }}>
        <img src={img} class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text fs-3 text-center text-danger">{name}</p>
        </div>
      </div>
    </div>
  );
};

export default Expert;
