const getAvatar = () => {
  let myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${window.sessionStorage.getItem("token")}`
  );

  const id = window.sessionStorage.getItem("_id")

  const requestOptions: any = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    return fetch(
      `https://fynes-task-manager.herokuapp.com/users/${id}/avatar`,
      requestOptions
    );
  } catch (e) {
    console.log(e);
  }
}

export default getAvatar;