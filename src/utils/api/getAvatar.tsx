const getAvatar = async (): Promise<Response> => {
  // let myHeaders = new Headers();
  // myHeaders.append(
  //   "Authorization",
  //   `Bearer ${window.sessionStorage.getItem("token")}`
  // );

  const id = window.sessionStorage.getItem("_id");

  const requestOptions: any = {
    method: "GET",
    // headers: myHeaders,
    redirect: "follow",
  };

  const url = process.env.REACT_APP_API_URL;

  const res = await fetch(`${url}/users/${id}/avatar`, requestOptions);

  return res;
};

export default getAvatar;
