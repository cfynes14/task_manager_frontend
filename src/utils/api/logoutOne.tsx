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

  const url = process.env.REACT_APP_API_URL;

  const res = await fetch(`${url}/users/logout`, requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log(error));
  return res;
};

export default logoutAll;
