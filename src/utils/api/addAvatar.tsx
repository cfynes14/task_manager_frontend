// interface AvatarInterface {
//   file: string;
// }

const addAvatar = async (file: string) => {
  const myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${window.sessionStorage.getItem("token")}`
  );

  const formdata = new FormData();
  formdata.append("avatar", file, "download.jpeg");

  const requestOptions: any = {
    method: "POST",
    headers: myHeaders,
    body: formdata,
    redirect: "follow",
  };

  try {
    return await fetch("http://localhost:3001/users/me/avatar", requestOptions);
  } catch (e) {
    console.log(e);
  }
};

export default addAvatar;

//"https://fynes-task-manager.herokuapp.com/users/me/avatar"
