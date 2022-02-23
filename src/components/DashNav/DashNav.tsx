import React from "react";
// import { Link } from "react-router-dom";
import { NavContainer } from "./styles";

interface DashNavProps {
  openNewTaskModal: () => void;
}

const DashNav = (props: DashNavProps) => {
  const { openNewTaskModal } = props;
  return (
    <>
      <NavContainer logo="Task Manager" logoutText="Logout" />

      {/* <SecondaryNav>
        <a href="#">Logout</a>
      </SecondaryNav> */}
    </>
  );
};

export default DashNav;
