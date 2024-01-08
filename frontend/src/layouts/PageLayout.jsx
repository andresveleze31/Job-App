import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBarAll from '../components/NavBarAll'
import Footer from '../components/home/Footer'

function PageLayout() {
  return (
    <div>
      <NavBarAll />
      <Outlet />
      <Footer />
    </div>
  )
}

export default PageLayout
