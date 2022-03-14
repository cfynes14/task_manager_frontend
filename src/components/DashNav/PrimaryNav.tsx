import { Link } from "react-router-dom";
import tw from "twin.macro";

interface PrimaryNav {
  dashboardHandleClick: (e: any) => void;
}

const PrimaryNav = (props: PrimaryNav) => {
  const { dashboardHandleClick } = props;
  return (
    <div tw="hidden md:flex items-center space-x-1">
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
    </div>
  );
};

export default PrimaryNav;
