import React from "react";
import NavBarAll from "../components/NavBarAll";
import SidebarEmployer from "../components/admin/employer/SidebarEmployer";
import { Outlet } from "react-router-dom";

function EmployersLayout() {
  return (
    <div className="h-full">
      <NavBarAll />
      <div className="grid grid-cols-[1fr,5fr] xl:grid-cols-[1fr,6fr]">
        <SidebarEmployer />
        <div className="bg-gray-100 px-[7rem] py-[2rem]  ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default EmployersLayout;
