interface EditTaskBody {
  description: string;
  completed: boolean;
}

const editTask = (taskBody: EditTaskBody) => {
  const { completed, description } = taskBody;

  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${window.sessionStorage.getItem("token")}`
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    completed: completed,
    description: description,
  });

  var requestOptions: any = {
    method: "PATCH",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  try {
    return fetch(
      "https://fynes-task-manager.herokuapp.com/tasks/61a9e20dda202700161bfcb9",
      requestOptions
    );
  } catch (e) {
    console.log(e);
  }
};

export default editTask;
