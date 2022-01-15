const getAvatar = async () => {
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

  try {
    const res = await fetch(
      `http://localhost:3001/users/${id}/avatar`,
      requestOptions
    );

    return res;
  } catch (e) {
    console.log(e);
  }
};

export default getAvatar;
