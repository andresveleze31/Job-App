import React from 'react'
import NavBarAll from '../components/NavBarAll'
import SidebarCandidate from '../components/admin/candidate/SidebarCandidate'
import { Outlet } from 'react-router-dom'

function CandidatesLayout() {
  return (
    <div >
      <NavBarAll />
      <div className="grid grid-cols-[1fr,5fr]  ">
        <SidebarCandidate />
        <div className="bg-gray-100 h-[90vh] overflow-y-scroll px-[20rem] py-[2rem]  ">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default CandidatesLayout
