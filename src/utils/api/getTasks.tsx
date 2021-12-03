const getTasks = async () => {
  console.log("getting tasks");
  var myHeaders = new Headers();
  myHeaders.append(
    "Authorization",
    `Bearer ${window.sessionStorage.getItem("token")}`
  );
  myHeaders.append("Content-Type", "application/json");

  var requestOptions: any = {
    method: "GET",
    headers: myHeaders,
    redirect: "follow",
  };

  try {
    const res = await fetch(
      "https://fynes-task-manager.herokuapp.com/tasks",
      requestOptions
    );
    const json = await res.json();
    console.log(json);
    return json;
  } catch (e) {
    console.log(e);
  }

  //   fetch("https://fynes-task-manager.herokuapp.com/tasks", requestOptions)
  //     .then((response) => response.text())
  //     .then((result) => console.log(result))
  //     .catch((error) => console.log("error", error));
};

export default getTasks;
