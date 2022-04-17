import ModalStyles from "./ModalStyles";

interface LogoutModalInterface {
  logoutAll: () => void;
  closeLogoutModal: () => void;
  setIsLoggedIn: (arg: boolean) => void;
}

const LogoutModal = (props: LogoutModalInterface) => {
  const { logoutAll, closeLogoutModal, setIsLoggedIn } = props;

  // const modalHandleLogout = () => {
  //   closeLogoutModal();
  //   setIsLoggedIn(false);
  // };

  return (
    <ModalStyles>
      <h1>Are you sure you want to logout?</h1>
      <section>
        <button onClick={logoutAll}>Yes</button>
        <button onClick={closeLogoutModal}>No</button>
      </section>
    </ModalStyles>
  );
};

export default LogoutModal;
