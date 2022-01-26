import { request } from "http";

const deleteAvatar = () => {
  console.log("DELETEING AVATAR METHOD");
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

  const id = window.sessionStorage.getItem("_id");

  try {
    return fetch(`http://localhost:3001/users/${id}/avatar`, requestOptions);
  } catch (e) {}
};

export default deleteAvatar;
