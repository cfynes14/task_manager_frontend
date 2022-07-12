const getAvatar = async (): Promise<Response> => {
  let id = window.sessionStorage.getItem("_id") as string;

  if (id.includes('"')) {
    // remove double quotes at the beginning/end of string
    id = id.substr(1, id.length - 2);
  }

  const requestOptions: any = {
    method: "GET",
    redirect: "follow",
  };

  const url = process.env.REACT_APP_API_URL;

  const res = await fetch(`${url}/users/${id}/avatar`, requestOptions);

  return res;
};

export default getAvatar;
