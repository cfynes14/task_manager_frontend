import { Link } from "react-router-dom";
import tw from "twin.macro";

interface LogoContainer {
  logo: string;
}

const LogoContainer = (props: LogoContainer) => {
  const { logo } = props;

  return (
    <div tw="mr-10">
      <Link to="/">
        <div tw="flex items-center py-5 px-3 font-bold hover:text-gray-900">
          <svg
            tw="h-6 w-6 mr-2"
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
              d="M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"
            />
          </svg>
          <h1 tw="text-black">{logo}</h1>
        </div>
      </Link>
    </div>
  );
};

export default LogoContainer;
