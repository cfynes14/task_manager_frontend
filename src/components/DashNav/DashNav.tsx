import React from "react";
// import { Link } from "react-router-dom";

import tw from "twin.macro";

import LogoContainer from "./components/LogoContainer";
import PrimaryNav from "./components/PrimaryNav";
import SecondaryNav from "./components/SecondaryNav";
import MobileNav from "./components/MobileNav";

interface DashNavProps {
  openNewTaskModal: () => void;
  openEditModal: () => void;
  openLogoutModal: () => void;
  dashboardHandleClick: (e: any) => void;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DashNav = (props: DashNavProps) => {
  const {
    openNewTaskModal,
    dashboardHandleClick,
    openLogoutModal,
    handleChange,
  } = props;

  return (
    <>
      <nav tw="bg-gray-100">
        <div tw="max-w-5xl mx-auto ml-0">
          <div tw="flex justify-between">
            <div tw="flex space-x-4">
              <LogoContainer logo={"Task Manager"} />
              <PrimaryNav
                handleChange={handleChange}
                dashboardHandleClick={dashboardHandleClick}
                openNewTaskModal={openNewTaskModal}
              />
            </div>
            <SecondaryNav
              logoutText={"Logout"}
              openLogoutModal={openLogoutModal}
            />
            <MobileNav
              dashboardHandleClick={dashboardHandleClick}
              openLogoutModal={openLogoutModal}
            />
          </div>
        </div>
      </nav>
    </>
  );
};

export default DashNav;
