import React from "react";
import DashTabs from "../components/DashTabs";
import ModalCategory from "../components/ModalCategory";
import ModalPost from "../components/ModalPost";
function Dashboard() {
  const triggerText = "Open form";
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };
  return (
    <div className="flex flex-col mt-12">
      
      <div className="flex justify-end" >
        <ModalCategory triggerText={triggerText} onSubmit={onSubmit} />
        <ModalPost triggerText={triggerText} onSubmit={onSubmit} />
      </div>
      <div>
        <DashTabs /> 
      </div>     
    </div>
  );
}

export default Dashboard;
