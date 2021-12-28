const logoutAll = async (token: string | null) => {
  var myHeaders = new Headers();
  console.log(sessionStorage.getItem("token"));
  myHeaders.append("Authorization", `Bearer ${token}`);

  var raw = "";

  var requestOptions: any = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    return await fetch(
      "https://fynes-task-manager.herokuapp.com/users/logoutAll",
      requestOptions
    );
  } catch (e) {
    console.log(e);
  }
};

export default logoutAll;
