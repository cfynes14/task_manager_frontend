const logoutAll = async (token: string | null) => {
  var myHeaders = new Headers();
  console.log(sessionStorage.getItem("token"));
  myHeaders.append("Authorization", `Bearer ${token?.slice(1, -1)}`);

  var raw = "";

  var requestOptions: any = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const res = await fetch(
    "https://fynes-task-manager.herokuapp.com/users/logoutAll",
    requestOptions
  )
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
  return res;
};

export default logoutAll;
