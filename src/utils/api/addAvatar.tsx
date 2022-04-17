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
    const url = process.env.REACT_APP_API_URL;

    return await fetch(`${url}/users/me/avatar`, requestOptions);
  } catch (e) {
    console.log(e);
  }
};

export default addAvatar;

//"process.env.URL/users/me/avatar"
