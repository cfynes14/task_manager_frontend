interface EditTaskBody {
  _id: string;
  description: string | undefined;
  completed: boolean;
}

const editTask = (taskBody: EditTaskBody) => {
  const { _id, completed, description } = taskBody;

  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${window.sessionStorage.getItem("token")}`
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    completed: completed.toString(),
    description: description,
  });

  var requestOptions: any = {
    method: "PATCH",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    const url = process.env.REACT_APP_API_URL;

    return fetch(`${url}/tasks/${_id}`, requestOptions);
  } catch (e) {
    console.log(e);
  }
};

export default editTask;
