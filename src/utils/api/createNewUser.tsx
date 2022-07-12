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

const createNewUser = async ({
  name,
  age,
  email,
  password,
}: UserInterface): Promise<any> => {
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

    const url = process.env.REACT_APP_API_URL;

    const response = await fetch(`${url}/users`, requestOptions);

    console.log(response);

    if (response.status !== 201) {
      console.log("bad response");
      return response;
    }

    const json = await response.json();

    result.token = json.token;
    result.data = json.user;
    result.status = response.status;

    console.log(json);
    return result;
  } catch (e) {
    console.log(e);
  }
};

export default createNewUser;
