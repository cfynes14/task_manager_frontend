export interface UrlParams {
  completedParam?: string;
  paginationParam?: string;
  sortParam?: string;
}

const getTasks = async ({
  completedParam,
  paginationParam,
  sortParam,
}: UrlParams) => {
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

  let optionalParamsArray: string[] = [];

  if (completedParam || paginationParam || sortParam) {
    if (completedParam) {
      optionalParamsArray.push(completedParam);
    }
    if (paginationParam) {
      optionalParamsArray.push(paginationParam);
    }
    if (sortParam) {
      optionalParamsArray.push(sortParam);
    }
  }

  let optionalParams: string = optionalParamsArray.toString();

  optionalParams = optionalParams.replace(/,/g, "&");

  try {
    const res = await fetch(
      `https://fynes-task-manager.herokuapp.com/tasks?` + optionalParams,
      requestOptions
    );
    const json = await res.json();
    console.log(json);
    return json;
  } catch (e) {
    console.log(e);
  }
};

export default getTasks;
