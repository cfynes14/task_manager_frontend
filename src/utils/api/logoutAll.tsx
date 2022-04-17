const logoutAll = async (token: string | null) => {
  console.log("logging out all");

  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  const requestOptions: any = {
    method: "POST",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const url = process.env.REACT_APP_API_URL;

    const res = await fetch(`${url}/users/logoutAll`, requestOptions);

    window.sessionStorage.clear();

    return res;
  } catch (e) {
    console.log(e);
  }
};

export default logoutAll;
