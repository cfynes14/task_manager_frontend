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
  userAvatar: string;
  status: number;
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
    let res: UserData = {} as UserData;
    const url = process.env.REACT_APP_API_URL;

    const userInfoRes = await fetch(`${url}/users/me`, requestOptions);

    try {
      const userAvatarRes = await getAvatar();
      if (userAvatarRes.status === 200) {
        const userId = window.sessionStorage.getItem("_id");

        res.userAvatar = `http://localhost:3001/users/${userId}/avatar`;
      }
    } catch (e) {
      console.log(e);
    }

    if (userInfoRes.status === 200) {
      const userInfoJson = await userInfoRes.json();

      res.userInfo = await userInfoJson;
    }

    res.status = userInfoRes.status;

    result = res;

    return result;
  } catch (e) {
    result = e as string;
    console.log(e);
    return "Error " + result;
  }
};

export default getUser;
