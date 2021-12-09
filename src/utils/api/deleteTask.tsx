const deleteTask = (taskId: string, token: string | null) => {
  const myHeaders = new Headers();
  myHeaders.append("Authorization", `Bearer ${token}`);

  var requestOptions: any = {
    method: "DELETE",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    return fetch(
      `https://fynes-task-manager.herokuapp.com/tasks/${taskId}`,
      requestOptions
    );
  } catch (e) {
    console.log(e);
  }
};

export default deleteTask;
