const deleteAccount = () => {
  const myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${window.sessionStorage.getItem("token")}`
  );

  const requestOptions: any = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    return fetch(
      "https://fynes-task-manager.herokuapp.com/users/me",
      requestOptions
    );
  } catch (e) {
    console.log(e);
  }
};

export default deleteAccount;
