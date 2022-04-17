interface LoginParams {
  email: string;
  password: string;
}

const loginUser = async (credentials: LoginParams) => {
  console.log("handling login");
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    email: credentials.email,
    password: credentials.password,
  });

  var requestOptions: any = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const url = process.env.REACT_APP_API_URL;

  const response = await fetch(`${url}/users/login`, requestOptions);

  if (response.status === 200) {
    const json = await response.json();
    window.sessionStorage.setItem("token", json.token);
    window.sessionStorage.setItem("_id", json.user._id);
    console.log("logged in");
  } else {
    console.log("no login");
  }

  return response;
};

export default loginUser;
