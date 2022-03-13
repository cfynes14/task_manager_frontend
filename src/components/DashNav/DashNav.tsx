import React from "react";
// import { Link } from "react-router-dom";
import { NavContainer, SecondaryNav } from "./styles";

interface DashNavProps {
  openNewTaskModal: () => void;
  dashboardHandleClick: (e: any) => void;
}

const DashNav = (props: DashNavProps) => {
  const { openNewTaskModal, dashboardHandleClick } = props;
  return (
    <>
      <NavContainer
        logo="Task Manager"
        logoutText="Logout"
        dashboardHandleClick={dashboardHandleClick}
      />
      {/* 
      <SecondaryNav>
        <a href="#">Logout</a>
      </SecondaryNav> */}
    </>
  );
};

export default DashNav;
