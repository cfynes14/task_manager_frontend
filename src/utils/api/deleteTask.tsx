const deleteTask = (taskId: string) => {
  const token = window.sessionStorage.getItem("token");
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  var requestOptions: any = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    // const url = process.env.REACT_APP_API_URL;

    const url = undefined;

    return fetch(`${url}/tasks/${taskId}`, requestOptions);
  } catch (e) {
    console.log(e);
  }
};

export default deleteTask;
