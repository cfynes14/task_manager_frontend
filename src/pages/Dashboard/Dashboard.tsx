//dependencies
import React, { useEffect, useCallback, FormEventHandler } from "react";
import { useState } from "react";
import Modal from "react-modal";
import { createImportSpecifier, ModifierFlags } from "typescript";
import { Link } from "react-router-dom";
import tw from "twin.macro";

//pages
import DashNav from "../../components/DashNav/DashNav";
import Task from "../../components/Task/Task";

//interfaces
import { TaskParams } from "../../components/Task/Task";
import { UrlParams } from "../../utils/api/getTasks";

//components
import NewTaskModal from "../../modals/NewTaskModal";
import EditTaskModal from "../../modals/EditTaskModal";
import DeleteTaskModal from "../../modals/DeleteTaskModal";
import LogoutModal from "../../modals/LogoutModal";

//functions
import logoutAll from "../../utils/api/logoutAll";
import getTasks from "../../utils/api/getTasks";

//styles
import DashStyles from "./styles";

interface DashboardInterface {
  setIsLoggedIn: (arg: boolean) => void;
  setIsLoading: (arg: boolean) => void;
}

const Dashboard = (props: DashboardInterface) => {
  const { setIsLoggedIn, setIsLoading } = props;

  const [isNewTaskModalOpen, setNewTaskModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [isLogoutModalOpen, setLogoutModalOpen] = useState<boolean>(false);
  const [tasks, setTasks] = useState<any>([]);
  const [currentTask, setCurrentTask] = useState<any>("");
  const [completedFilter, setCompletedFilter] = useState<boolean | undefined>(
    undefined
  );
  const [taskLimit, setTaskLimit] = useState<number>(0);
  const [skipCounter, setSkipCounter] = useState<number>(0);
  const [pageNumber, setPageNumber] = useState<number>(0);
  const [sortBy, setSortBy] = useState<string | undefined>("");

  const pageSkipCreator = () => {
    if (pageNumber === 0) {
      taskLimit && tasks.length > taskLimit
        ? setPageNumber(Math.ceil(tasks.length / taskLimit))
        : setPageNumber(0);
    }
  };

  const paramBuilder = () => {
    let params: UrlParams = {};
    params.completedParam = completedFilter
      ? `completed=${completedFilter}`
      : "";

    if (completedFilter === false) {
      params.completedParam = "completed=false";
    }

    let skip: string | undefined = undefined;
    if (skipCounter !== 0) {
      skip = `skip=${skipCounter}`;
    }
    params.paginationParam = `limit=${taskLimit}${
      skip ? `&skip=${skipCounter}` : ""
    }`;
    //sortBy=createdAt:acs or createdAt:desc
    if (sortBy) {
      params.sortParam = `sortBy=createdAt:${sortBy}`;
    }

    pageSkipCreator();

    return params;
  };

  // const handleLogin = async () => {
  //   let optionalParams: UrlParams = paramBuilder();
  //   console.log("handling login");
  //   const currentTasks = await getTasks(optionalParams);
  //   setTasks(currentTasks);
  //   if (currentTasks) {
  //     console.log("account page setting isloading false");
  //     setIsLoading(false);
  //   }
  // };

  const handleTasksChange = async () => {
    let optionalParams: UrlParams = paramBuilder();

    const currentTasks = await getTasks(optionalParams);
    setTasks(currentTasks);
  };

  // React.MouseEvent<HTMLButtonElement, MouseEvent> - replaced with 'any' because TS can't find textContent on e.target
  const dashboardHandleClick = (e: any) => {
    console.log("handling click");
    console.log(e);
    e.preventDefault();

    if (e.target.className === "pageButton") {
      setSkipCounter(e.target.textContent);
    }

    switch (e.target.textContent) {
      case /\d+/:
        console.log("NUMBERS!!!");
        console.log(e.target.textContent);
        setSkipCounter(parseInt(e.target.textContent));
        break;
      case "Show Completed":
        setCompletedFilter(true);
        break;
      case "Show Incomplete":
        setCompletedFilter(false);
        break;
      case "Show All":
        setTaskLimit(0);
        setCompletedFilter(undefined);
        setPageNumber(0);
        break;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    console.log("HANDLING CHANGE");
    console.log(e.target);
    if (e.target.name === "limitSelect") {
      setTaskLimit(parseInt(e.target.value));
    } else {
      // console.log(e.target.value);
      switch (e.target.value) {
        case "Newest":
          setSortBy("desc");
          break;
        case "Oldest":
          setSortBy("asc");
      }
    }
  };

  useEffect(() => {
    setIsLoading(true);
    // handleLogin();
    handleTasksChange();
    // setTasks;
    setIsLoading(false);
  }, [completedFilter, taskLimit, sortBy, skipCounter]);

  //modals
  const openNewTaskModal = () => {
    setNewTaskModalOpen(true);
  };

  const closeNewTaskModal = () => {
    setNewTaskModalOpen(false);
  };

  const openEditModal = () => {
    setEditModalOpen(true);
  };

  const closeEditModal = () => {
    setEditModalOpen(false);
  };

  const openDeleteModal = () => {
    setDeleteModalOpen(true);
  };

  const closeDeleteModal = () => {
    setDeleteModalOpen(false);
  };

  const openLogoutModal = () => {
    setLogoutModalOpen(true);
  };

  const closeLogoutModal = () => {
    setLogoutModalOpen(false);
  };

  const handleLogout = async () => {
    closeLogoutModal();
    const res: Response | undefined = await logoutAll(
      sessionStorage.getItem("token")
    );
    if (res && res.status === 200) {
      setIsLoggedIn(false);
      console.log("dashboard setting isloading true");
      setIsLoading(true);
    }
  };

  let pagesArr: number[] = [];
  const pageArrayCreator = () => {
    if (pageNumber !== 0) {
      for (let i = 0; i < pageNumber; i++) {
        pagesArr.push(i + 1);
      }
    }
  };

  pageArrayCreator();

  return (
    <DashStyles>
      <main>
        <div className="dashContainer">
          {/* <h2>Dashboard</h2> */}
          <DashNav
            dashboardHandleClick={dashboardHandleClick}
            openNewTaskModal={openNewTaskModal}
            openEditModal={openEditModal}
            openLogoutModal={openLogoutModal}
            handleChange={handleChange}
          />
        </div>
        <div className="wrapper">
          {tasks.map((task: any) => (
            <Task
              key={task._id}
              id={task._id}
              description={task.description}
              completed={task.completed}
              openDeleteModal={openDeleteModal}
              openEditModal={openEditModal}
              setCurrentTask={setCurrentTask}
            />
          ))}
        </div>
        <div id="pages">
          {pageNumber != 0
            ? pagesArr.map((page) => (
                <p
                  className="pageButton"
                  tw="inline py-5 px-3 text-gray-700 hover:text-gray-900 cursor-pointer"
                  onClick={(
                    e: React.MouseEvent<HTMLParagraphElement, MouseEvent>
                  ) => dashboardHandleClick(e)}
                >
                  {page}
                </p>
              ))
            : ""}
        </div>
        <Modal isOpen={isNewTaskModalOpen} ariaHideApp={false}>
          <NewTaskModal
            closeNewTaskModal={closeNewTaskModal}
            handleTasksChange={handleTasksChange}
          />
        </Modal>
        <Modal isOpen={isEditModalOpen} ariaHideApp={false}>
          <EditTaskModal
            closeEditModal={closeEditModal}
            handleTasksChange={handleTasksChange}
            currentTask={currentTask}
          />
        </Modal>
        <Modal isOpen={isDeleteModalOpen} ariaHideApp={false}>
          <DeleteTaskModal
            taskDescription={currentTask.description}
            taskId={currentTask._id}
            closeDeleteModal={closeDeleteModal}
            handleTasksChange={handleTasksChange}
          />
        </Modal>
        <Modal isOpen={isLogoutModalOpen} ariaHideApp={false}>
          <LogoutModal
            closeLogoutModal={closeLogoutModal}
            logoutAll={handleLogout}
            setIsLoggedIn={setIsLoggedIn}
          />
        </Modal>
      </main>
    </DashStyles>
  );
};

export default Dashboard;
