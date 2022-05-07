import React from "react";
import { useNavigate } from 'react-router-dom';
function MostRead() {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/mread/`; 
    navigate(path);
  }

  return (
    <div className="card w-96 bg-base-100 shadow-xl">
  <div className="card-body">
    <h2 className="card-title">Card title!</h2>
    <p>If a dog chews shoes whose shoes does he choose?</p>
    <div className="card-actions justify-end">
      <button onClick={routeChange} className="btn btn-primary">Buy Now</button>
    </div>
  </div>
</div>
  );
}

export default MostRead;
