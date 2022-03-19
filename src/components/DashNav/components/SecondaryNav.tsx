import tw from "twin.macro";

interface SecondaryNavInterface {
  logoutText: string;
  setLogoutModalOpen: any;
}

const SecondaryNav = (props: SecondaryNavInterface) => {
  const { logoutText, setLogoutModalOpen } = props;

  const handleClick = () => {
    setLogoutModalOpen(true);
  };

  return (
    <div
      tw="hidden md:flex  py-5 px-3 bg-yellow-400 hover:bg-yellow-300 text-yellow-900 hover:text-yellow-800 rounded transition duration-300"
      onClick={handleClick}
    >
      {logoutText}
    </div>
  );
};

export default SecondaryNav;
