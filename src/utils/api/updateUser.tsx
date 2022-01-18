export interface UpdateUser {
  age?: number | undefined;
  name?: string | null | undefined | HTMLElement;
  email?: string | undefined;
  password?: string | undefined;
}

const updateUser = async (userDetails: UpdateUser) => {
  let myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${window.sessionStorage.getItem("token")}`
  );
  myHeaders.append("Content-Type", "application/json");

  console.log(userDetails);

  const raw = JSON.stringify(userDetails);

  const requestOptions: any = {
    method: "PATCH",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const res = await fetch(
      "https://fynes-task-manager.herokuapp.com/users/me",
      requestOptions
    );
    return res;
  } catch (e) {
    console.log(e);
  }
};

export default updateUser;
