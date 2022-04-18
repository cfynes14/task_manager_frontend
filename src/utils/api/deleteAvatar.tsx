import { request } from "http";

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

  const id = window.sessionStorage.getItem("_id");

  try {
    const url = process.env.REACT_APP_API_URL;
    return fetch(`${url}/users/${id}/avatar`, requestOptions);
  } catch (e) {}
};

export default deleteAvatar;
