import { UserInterface } from "../../components/NewUserForm/NewUserForm";

interface UserResponseInterface {
  age: number;
  createdAt: string;
  email: string;
  name: string;
  updatedAt: string;
  __v: number;
  _id: string;
}

interface UserResultInterface {
  token: string;
  data: UserResponseInterface;
  status: number;
}

const createNewUser = async ({ name, age, email, password }: UserInterface) => {
  const userInfo: UserInterface = {
    name: name,
    age: age,
    email: email,
    password: password,
  };

  const myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  const raw = JSON.stringify({
    name: userInfo.name,
    age: userInfo.age,
    email: userInfo.email,
    password: userInfo.password,
  });

  const requestOptions: any = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    let result: UserResultInterface = {} as UserResultInterface;

    const response = await fetch(
      "https://fynes-task-manager.herokuapp.com/users",
      requestOptions
    );

    console.log(response);

    if (response.status !== 201) {
      console.log("bad response");
      return response;
    }

    const json = await response.json();

    result.token = json.token;
    result.data = json.user;
    result.status = response.status;

    window.sessionStorage.setItem("_id", JSON.stringify(json.user._id));
    window.sessionStorage.setItem("token", JSON.stringify(json.token));
    console.log(json);
    return result;
  } catch (e) {
    console.log(e);
  }
};

export default createNewUser;
