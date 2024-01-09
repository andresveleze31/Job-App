import React from "react";
import { Outlet } from "react-router-dom";
import NavBarAll from "../components/NavBarAll";
import Footer from "../components/home/Footer";
import useJobtex from "../hooks/useJobtex";
import ModalLogin from "../components/ModalLogin";

function PageLayout() {
  const { login } = useJobtex();

  return (
    <div>
      {login && <ModalLogin />}

      <NavBarAll />
      <Outlet />
      <Footer />
    </div>
  );
}

export default PageLayout;
