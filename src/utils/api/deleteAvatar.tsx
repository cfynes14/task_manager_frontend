const deleteAvatar = () => {
    let myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${window.sessionStorage.getItem("token")}`
  );
  myHeaders.append("Content-Type", "application/json");

  const requestOptions: any = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
   return fetch('http://localhost:3001/users/me/avatar')
  } catch(e){

  }
}

export default deleteAvatar