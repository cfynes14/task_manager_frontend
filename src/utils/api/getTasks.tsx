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
    const url = process.env.REACT_APP_API_URL;

    const res = await fetch(`${url}/tasks?` + optionalParams, requestOptions);
    const json = await res.json();
    return json;
  } catch (e) {
    console.log(e);
  }
};

export default getTasks;
