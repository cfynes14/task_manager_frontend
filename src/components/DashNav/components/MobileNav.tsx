import { useState } from "react";
import tw from "twin.macro";

import { Link } from "react-router-dom";

interface MobileNavInterface {
  dashboardHandleClick: (e: any) => void;
  openLogoutModal: () => void;
}

const MobileNav = (props: MobileNavInterface) => {
  const { dashboardHandleClick, openLogoutModal } = props;

  const [isMobileMenuHidden, setMobileMenuHidden] = useState(true);

  const handleClick = () => {
    isMobileMenuHidden ? setMobileMenuHidden(false) : setMobileMenuHidden(true);
  };

  return (
    <div tw="md:hidden flex items-center">
      <button className="mobile-menu-button" onClick={handleClick}>
        <svg
          tw="w-6 h-6"
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M4 6h16M4 12h16M4 18h16"
          />
        </svg>
      </button>
      {isMobileMenuHidden ? (
        ""
      ) : (
        <div className="mobile-menu" tw="md:hidden">
          <Link to="/account_settings">
            <h3 tw="block py-2 px-4 text-sm hover:bg-gray-200">Account</h3>
          </Link>
          <h3
            tw="block py-2 px-4 text-sm hover:bg-gray-200"
            onClick={(e) => dashboardHandleClick(e)}
          >
            All
          </h3>
          <h3
            tw="block py-2 px-4 text-sm hover:bg-gray-200"
            onClick={(e) => dashboardHandleClick(e)}
          >
            Completed
          </h3>
          <h3
            tw="block py-2 px-4 text-sm hover:bg-gray-200"
            onClick={(e) => dashboardHandleClick(e)}
          >
            Incomplete
          </h3>
          <h3
            tw="block py-2 px-4 text-sm hover:bg-gray-200"
            onClick={(e) => openLogoutModal()}
          >
            Logout
          </h3>
        </div>
      )}
    </div>
  );
};

export default MobileNav;
