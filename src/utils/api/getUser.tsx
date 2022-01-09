import getAvatar from "./getAvatar";

export interface UserDataInterface {
  age: number;
  createdAt: string;
  email: string;
  name: string;
  updatedAt: string;
  _v: number;
  _id: string;
}

export interface UserData {
  userInfo: UserDataInterface;
  userAvatar: string | void;
  status: number
}

const getUser = async (): Promise<UserData | string> => {
  const myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${window.sessionStorage.getItem("token")}`
  );

  const requestOptions: any = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  let result: UserData | string;

  try {
    let res: UserData = {} as UserData
    const userInfoRes = await fetch(
      "https://fynes-task-manager.herokuapp.com/users/me",
      requestOptions
    );

    const userInfoJson = await userInfoRes.json()

      const userAvatar = await getAvatar()

      res.userInfo = await userInfoJson
      res.userAvatar = userAvatar
      res.status = userInfoRes.status

      result = res

      return res

  } catch (e) {
    result = e as string
    console.log(e);
    return "Error " + result
  }

  return result
};



export default getUser;
