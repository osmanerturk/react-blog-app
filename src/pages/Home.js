import React from "react";

import Carousel from "../components/Carousel";
import MostRead from "../components/MostRead";
import MostRecent from "../components/MostRecent";

function Home() {
  return (
    <div>
      <Carousel />
      <div className="grid grid-cols-3 gap-10 ml-10 mt-10">
        <div className="col-span-2 space-y-4">
          <MostRecent  />
          <MostRecent  />
          <MostRecent  />
          
        </div>
        <div  className="col-span-1 space-y-4">
          <MostRead  />
          <MostRead  />
          <MostRead  />
        </div>
        
        
      </div>
    </div>
  );
}

export default Home;
