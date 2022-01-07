// interface AvatarInterface {
//   file: string;
// }

const addAvatar = (file: string) => {
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
    return fetch(
      "https://fynes-task-manager.herokuapp.com/users/me/avatar",
      requestOptions
    );
  } catch (e) {
    console.log(e);
  }
};

export default addAvatar;
