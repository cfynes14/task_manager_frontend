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
    const url = process.env.REACT_APP_API_URL;

    return fetch(`${url}/users/me`, requestOptions);
  } catch (e) {
    console.log(e);
  }
};

export default deleteAccount;
