import { UserInterface } from "../../components/NewUserForm/NewUserForm";

const createNewUser = async ({ name, age, email, password }: UserInterface) => {
  const userInfo: UserInterface = {
    name: name,
    age: age,
    email: email,
    password: password,
  };

  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    name: userInfo.name,
    age: userInfo.age,
    email: userInfo.email,
    password: userInfo.password,
  });

  var requestOptions: any = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const res = await fetch(
      "https://fynes-task-manager.herokuapp.com/users",
      requestOptions
    );
    const json = await res.json();

    window.sessionStorage.setItem("_id", JSON.stringify(json.user._id));
    window.sessionStorage.setItem("token", JSON.stringify(json.token));
    console.log(json);
    return json;
  } catch (e) {
    console.log(e);
  }

  //   fetch("https://fynes-task-manager.herokuapp.com/users", requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => {
  //       console.log(result);
  //       window.sessionStorage.setItem("_id", JSON.stringify(result._id));
  //     })
  //     .catch((error) => console.log("error", error));
};

export default createNewUser;
