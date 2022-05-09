import React from "react";
import { useNavigate } from "react-router-dom";
function ReactPage() {
  let navigate = useNavigate();
  const routeChange = () => {
    let path = `/posts/category/react/project/1`;
    navigate(path);
  };

  return (
    <div>
      <ul className="steps steps-vertical lg:steps-horizontal">
        <li className="step step-primary">Posts</li>
        <li className="step step-primary">React</li>
        <li className="step">Project</li>
      </ul>
      <div className="flex gap-5 ml-5 mr-5 mt-10 cursor-pointer">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              onClick={routeChange}
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button onClick={routeChange} className="btn btn-primary">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              onClick={routeChange}
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button onClick={routeChange} className="btn btn-primary">
                Buy Now
              </button>
            </div>
          </div>
        </div>
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img
              onClick={routeChange}
              src="https://api.lorem.space/image/shoes?w=400&h=225"
              alt="Shoes"
            />
          </figure>
          <div className="card-body">
            <h2 className="card-title">Shoes!</h2>
            <p>If a dog chews shoes whose shoes does he choose?</p>
            <div className="card-actions justify-end">
              <button onClick={routeChange} className="btn btn-primary">
                Buy Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ReactPage;
