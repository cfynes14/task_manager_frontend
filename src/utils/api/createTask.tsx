import { TaskParams } from "../../components/Task/Task";

interface NewTaskParams {
  description: string;
  completed: boolean;
}

const createTask = async (taskParams: NewTaskParams) => {
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

  const url = process.env.REACT_APP_API_URL;

  const res = await fetch(`${url}/tasks`, requestOptions);

  return res;
};

export default createTask;
