import React from "react";
import { useState, ElementType } from "react";
import Spinner from "../spinner/Spinner";

type WrapperProps = {
  WrappedComponent: ElementType<any>;
  isComponentLoading: boolean;
  // message: string;
};

export const Loader = (props: WrapperProps) => {
  const { WrappedComponent, isComponentLoading } = props;

  console.log("HELLO FROM LOADER", isComponentLoading);

  // console.log(message);
  // const [isLoading, setLoadingState] = useState<boolean>(true);

  // if (!isComponentLoading) {
  //   setLoadingState(false);
  // }

  // !isComponentLoading ? setLoadingState(false) : setLoadingState(true);

  // const [componentMessage, setComponentMessage] = useState<string>("");

  // const setIsLoading = (isComponentLoading: boolean) => {
  //   console.log("setting Loading");
  //   console.log("is component loading", isComponentLoading);
  //   setLoadingState(isComponentLoading);
  // };

  return (
    <>
      {isComponentLoading && <Spinner />}
      <WrappedComponent />
    </>
  );
};
