const logoutAll = async (token: string) => {
  var myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  var raw = "";

  var requestOptions: any = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  const res = await fetch(
    "https://fynes-task-manager.herokuapp.com/users",
    requestOptions
  );

  return res;
};

export default logoutAll;
