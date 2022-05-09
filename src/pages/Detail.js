import React from "react";
function Detail() {
  return (
    <div>
      <ul className="steps steps-vertical lg:steps-horizontal">
        <li className="step step-primary">Posts</li>
        <li className="step step-primary">React</li>
        <li className="step step-primary">Project</li>
      </ul>
      <div className="flex flex-col justify-center">
        <img
          className="p-7 w-max m-auto"
          src="https://api.lorem.space/image/shoes?w=400&h=200"
          alt="Shoes"
        />
        <h1 className="text-center font-bold">Main Title</h1>
        <p className="p-3">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce sodales
          aliquet dui. Duis sed justo a nisi blandit molestie. Aliquam a mauris
          ac sapien gravida malesuada ac sit amet metus. Nulla nulla eros,
          imperdiet sit amet ultricies et, mattis at lectus. Vestibulum accumsan
          aliquet interdum. Vestibulum arcu odio, tempus eu.
        </p>
      </div>
    </div>
  );
}

export default Detail;
