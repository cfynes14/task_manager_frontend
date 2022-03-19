import React from "react";
// import { Link } from "react-router-dom";

import tw from "twin.macro";

import LogoContainer from "./components/LogoContainer";
import PrimaryNav from "./components/PrimaryNav";
import SecondaryNav from "./components/SecondaryNav";
import MobileNav from "./components/MobileNav";

interface DashNavProps {
  openNewTaskModal: () => void;
  dashboardHandleClick: (e: any) => void;
  setLogoutModalOpen: (arg: boolean) => void;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
}

const DashNav = (props: DashNavProps) => {
  const {
    openNewTaskModal,
    dashboardHandleClick,
    setLogoutModalOpen,
    handleChange,
  } = props;

  return (
    <>
      <nav tw="bg-gray-100">
        <div tw="max-w-5xl mx-auto">
          <div tw="flex justify-between">
            <div tw="flex space-x-4">
              <LogoContainer logo={"Task Manager"} />
              <PrimaryNav
                handleChange={handleChange}
                dashboardHandleClick={dashboardHandleClick}
              />
            </div>
            <SecondaryNav
              logoutText={"Logout"}
              setLogoutModalOpen={setLogoutModalOpen}
            />
            <MobileNav dashboardHandleClick={dashboardHandleClick} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default DashNav;
