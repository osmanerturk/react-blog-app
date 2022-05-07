import React from "react";

import Carousel from "../components/Carousel";
import MostRead from "../components/MostRead";
import MostRecent from "../components/MostRecent";

function Home() {
  return (
    <div>
      <Carousel />
      <div className="grid grid-cols-2 gap-10 ml-10 mt-10">
        <MostRecent className="col-span-2 ..." />
        <MostRead className="..." />
      </div>
    </div>
  );
}

export default Home;
