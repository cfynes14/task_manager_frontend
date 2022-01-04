interface UpdateUser {
  age: number;
  name: string;
  email: string;
  password: string;
}

const updateUser = async (userDetails: UpdateUser) => {
  const myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${window.sessionStorage.getItem("token")}`
  );
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    age: userDetails.age,
    name: userDetails.name,
    email: userDetails.email,
    password: userDetails.password,
  });

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
    return res.json();
  } catch (e) {
    console.log(e);
  }
};

export default updateUser;
