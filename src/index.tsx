import React from "react";
import { useState, ElementType, useEffect } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";

import GlobalStyles from "./styles/GlobalStyles";

import LoaderComponent from "./utils/loaderComponent/LoaderComponent";

type WrapperProps = {
  WrappedComponent: ElementType<any>;
  // message: string;
};

export const Loader = (props: WrapperProps) => {
  const { WrappedComponent } = props;

  // console.log(message);

  const [isLoading, setLoadingState] = useState<boolean>(true);
  // const [componentMessage, setComponentMessage] = useState<string>("");

  const setIsLoading = (isComponentLoading: boolean) => {
    console.log("setting Loading");
    console.log(isComponentLoading);
    setLoadingState(isComponentLoading);
  };

  return (
    <>
      {isLoading && <LoaderComponent />}
      <WrappedComponent setIsLoading={setIsLoading} />
    </>
  );
};

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
