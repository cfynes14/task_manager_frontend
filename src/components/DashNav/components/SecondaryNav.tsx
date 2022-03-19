import tw from "twin.macro";

interface SecondaryNavInterface {
  logoutText: string;
  openLogoutModal: () => void;
}

const SecondaryNav = (props: SecondaryNavInterface) => {
  const { logoutText, openLogoutModal } = props;

  const handleClick = () => {
    openLogoutModal;
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
