import { TaskParams } from "../../components/Task/Task";

const createTask = (taskParams: TaskParams) => {
  const { description, completed } = taskParams;

  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${window.sessionStorage.getItem("token")}`
  );
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify({
    description: description,
    completed: completed,
  });

  var requestOptions: any = {
    method: "POST",
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  fetch("https://fynes-task-manager.herokuapp.com/tasks", requestOptions)
    .then((response) => response.text())
    .then((result) => console.log(result))
    .catch((error) => console.log("error", error));
};

export default createTask;
