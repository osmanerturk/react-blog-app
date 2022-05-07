import React from "react";
import { useNavigate } from 'react-router-dom';
function MostRecent() {

  let navigate = useNavigate(); 
  const routeChange = () =>{ 
    let path = `/mrecent/`; 
    navigate(path);
  }
  return (
    <>
   <div className="card card-side bg-base-100 shadow-xl">
  <figure><img src="https://api.lorem.space/image/movie?w=200&h=280" alt="Movie"/></figure>
  <div className="card-body">
    <h2 className="card-title">New movie is released!</h2>
    <p>Click the button to watch on Jetflix app.</p>
    <div className="card-actions justify-end">
      <button onClick={routeChange} className="btn btn-primary">Watch</button>
    </div>
  </div>
</div>
    </>
  );
}

export default MostRecent;
