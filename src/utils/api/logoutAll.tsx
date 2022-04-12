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
    const res = await fetch(
      "https://fynes-task-manager.herokuapp.com/users/logoutAll",
      requestOptions
    );

    window.sessionStorage.clear();

    return res;
  } catch (e) {
    console.log(e);
  }
};

export default logoutAll;
