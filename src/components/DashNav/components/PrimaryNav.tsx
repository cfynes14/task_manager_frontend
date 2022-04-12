import { Link } from "react-router-dom";
import tw from "twin.macro";

import Select from "./Select";

import { pageSkipOptions, sortByOptions } from "../utils/selectOptions";

interface PrimaryNav {
  dashboardHandleClick: (e: any) => void;
  handleChange: (e: React.ChangeEvent<HTMLSelectElement>) => void;
  openNewTaskModal: () => void;
}

const PrimaryNav = (props: PrimaryNav) => {
  const { dashboardHandleClick, handleChange, openNewTaskModal } = props;
  return (
    <div tw="hidden md:flex items-center space-x-1">
      <h3
        tw="py-5 px-3 text-gray-700 hover:text-gray-900 cursor-pointer"
        onClick={openNewTaskModal}
      >
        New Task
      </h3>
      <Link to="/account_settings" tw="py-5 px-3">
        <h3>Account</h3>
      </Link>
      <h3
        tw="py-5 px-3 text-gray-700 hover:text-gray-900 cursor-pointer"
        onClick={(e) => dashboardHandleClick(e)}
      >
        Show All
      </h3>
      <h3
        tw="py-5 px-3 text-gray-700 hover:text-gray-900 cursor-pointer"
        onClick={(e) => dashboardHandleClick(e)}
      >
        Show Completed
      </h3>
      <h3
        tw="py-5 px-3 text-gray-700 hover:text-gray-900 cursor-pointer"
        onClick={(e) => dashboardHandleClick(e)}
      >
        Show Incomplete
      </h3>
      <Select
        key="primaryNavSkipSelect"
        options={pageSkipOptions}
        handleChange={handleChange}
        selectName="limitSelect"
      />
      <Select
        key="primaryNavTypeSelect"
        options={sortByOptions}
        handleChange={handleChange}
        selectName="typeSelect"
      />
    </div>
  );
};

export default PrimaryNav;
