import { Link } from "react-router-dom";
import tw, { styled } from "twin.macro";
import { useState } from "react";

export const LogoContainer = styled.div``;

export const SecondaryNav = styled.div``;

export const PrimaryNav = styled.div`
  ${tw`bg-colour2`}
  div {
    ${tw`px-8 mx-auto border border-black`}
  }
`;

export const NavContainer = (props) => {
  const { dashboardHandleClick } = props;

  const [isMobileMenuHidden, setMobileMenuHidden] = useState(true);

  const { logoutText, logo } = props;

  const handleClick = () => {
    console.log("handling click");

    console.log(isMobileMenuHidden);

    isMobileMenuHidden ? setMobileMenuHidden(false) : setMobileMenuHidden(true);
  };

  return (
    <nav tw="bg-gray-100">
      <div tw="max-w-5xl mx-auto">
        <div tw="flex justify-between">
          <div tw="flex space-x-4">
            <LogoContainer>
              <Link to="/">
                <div tw="flex items-center py-5 px-3 font-bold hover:text-gray-900">
                  <svg
                    tw="h-6 w-6 mr-2"
                    xmlns="http://www.w3.org/2000/svg"
                    class="h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    stroke-width="2"
                  >
                    <path
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
                    />
                  </svg>
                  <h1 tw="text-black">{logo}</h1>
                </div>
              </Link>
            </LogoContainer>

            <PrimaryNav tw="hidden md:flex items-center space-x-1">
              <h3 tw="py-5 px-3 text-gray-700 hover:text-gray-900">New Task</h3>
              <Link to="/account_settings" tw="py-5 px-3">
                <h3>Account</h3>
              </Link>
              <h3
                tw="py-5 px-3 text-gray-700 hover:text-gray-900"
                onClick={(e) => dashboardHandleClick(e)}
              >
                Show All
              </h3>
              <h3
                tw="py-5 px-3 text-gray-700 hover:text-gray-900"
                onClick={(e) => dashboardHandleClick(e)}
              >
                Show Completed
              </h3>
              <h3
                tw="py-5 px-3 text-gray-700 hover:text-gray-900"
                onClick={(e) => dashboardHandleClick(e)}
              >
                Show Incomplete
              </h3>
            </PrimaryNav>
          </div>
          <SecondaryNav tw="hidden md:flex  py-5 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300">
            {logoutText}
          </SecondaryNav>

          {/* mobile button goes here */}

          <div tw="md:hidden flex items-center">
            <button className="mobile-menu-button" onClick={handleClick}>
              <svg
                tw="w-6 h-6"
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6"
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
          </div>
        </div>
      </div>
      {/* mobile menu */}
      {isMobileMenuHidden ? (
        <div className="mobile-menu" tw="md:hidden">
          <h3
            tw="block py-2 px-4 text-sm hover:bg-gray-200"
            onClick={(e) => dashboardHandleClick(e)}
          >
            Account
          </h3>
          <h3
            tw="block py-2 px-4 text-sm hover:bg-gray-200"
            onClick={(e) => dashboardHandleClick(e)}
          >
            Show Completed
          </h3>
          <h3
            tw="block py-2 px-4 text-sm hover:bg-gray-200"
            onClick={(e) => dashboardHandleClick(e)}
          >
            Show Incomplete
          </h3>
        </div>
      ) : (
        ""
      )}
    </nav>
  );
};
