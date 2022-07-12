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
      <div className="modal-container">
        <h1>Are you sure you want to logout?</h1>
        <section>
          <button onClick={logoutAll}>Yes</button>
          <button onClick={closeLogoutModal}>No</button>
        </section>
      </div>
    </ModalStyles>
  );
};

export default LogoutModal;
