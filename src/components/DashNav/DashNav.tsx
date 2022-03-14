import React from "react";
// import { Link } from "react-router-dom";

import tw from "twin.macro";

import LogoContainer from "./LogoContainer";
import PrimaryNav from "./PrimaryNav";
import SecondaryNav from "./SecondaryNav";
import MobileNav from "./MobileNav";

interface DashNavProps {
  openNewTaskModal: () => void;
  dashboardHandleClick: (e: any) => void;
}

const DashNav = (props: DashNavProps) => {
  const { openNewTaskModal, dashboardHandleClick } = props;

  return (
    <>
      <nav tw="bg-gray-100">
        <div tw="max-w-5xl mx-auto">
          <div tw="flex justify-between">
            <div tw="flex space-x-4">
              <LogoContainer logo={"Task Manager"} />
              <PrimaryNav dashboardHandleClick={dashboardHandleClick} />
            </div>
            <SecondaryNav logoutText={"Logout"} />
            <MobileNav dashboardHandleClick={dashboardHandleClick} />
          </div>
        </div>
      </nav>
    </>
  );
};

export default DashNav;
