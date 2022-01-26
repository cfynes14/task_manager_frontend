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

  const res = await fetch(
    `http://localhost:3001/users/${id}/avatar`,
    requestOptions
  );

  // console.log("USER AVATAR");
  // console.log(json);

  return res;
};

export default getAvatar;
