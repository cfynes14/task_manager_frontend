//dependencies
import React, { useEffect, useCallback, FormEventHandler } from "react";
import { useState } from "react";
import Modal from "react-modal";
import tw from "twin.macro";

//pages
import DashNav from "../../components/DashNav/DashNav";
import Task from "../../components/Task/Task";

//interfaces
import { UrlParams } from "../../utils/api/getTasks";

//components
import NewTaskModal from "../../modals/NewTaskModal";
import EditTaskModal from "../../modals/EditTaskModal";
import DeleteTaskModal from "../../modals/DeleteTaskModal";
import LogoutModal from "../../modals/LogoutModal";
import { Loader } from "../../utils/loader/Loader";

//functions
import logoutAll from "../../utils/api/logoutAll";
import getTasks from "../../utils/api/getTasks";

//styles
import DashStyles from "./styles";
import "./dashboard.scss";

interface DashboardInterface {
  setIsLoggedIn: (arg: boolean) => void;
  // setIsLoading: (arg: boolean) => void;
}

const Dashboard = (props: DashboardInterface) => {
  const { setIsLoggedIn } = props;

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
  const [isComponentLoading, setIsComponentLoading] = useState<boolean>(true);

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

  const handleTasksChange = async () => {
    let optionalParams: UrlParams = paramBuilder();

    const currentTasks = await getTasks(optionalParams);

    if (currentTasks) {
      setIsComponentLoading(false);
    }

    setTasks(currentTasks);
  };

  const dashboardHandleClick = (e: React.MouseEvent) => {
    e.preventDefault();

    const target = e.target as HTMLHeadingElement;

    if (
      target.textContent &&
      target.className &&
      target.className.includes("pageButton")
    ) {
      const skip: number = parseInt(target.textContent);
      setSkipCounter(skip);
    }

    switch (target.textContent) {
      case "Completed":
        setCompletedFilter(true);
        break;
      case "Incomplete":
        setCompletedFilter(false);
        break;
      case "All":
        setTaskLimit(0);
        setCompletedFilter(undefined);
        setPageNumber(0);
        break;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if (e.target.name === "limitSelect") {
      setTaskLimit(parseInt(e.target.value));
    } else {
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
    handleTasksChange();
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
      // setIsLoading(true);
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

  const Tasks = () => {
    return (
      <>
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
      </>
    );
  };

  return (
    <DashStyles>
      <main>
        <DashNav
          dashboardHandleClick={dashboardHandleClick}
          openNewTaskModal={openNewTaskModal}
          openEditModal={openEditModal}
          openLogoutModal={openLogoutModal}
          handleChange={handleChange}
        />
        <Loader
          WrappedComponent={Tasks}
          isComponentLoading={isComponentLoading}
        />
        <Modal
          isOpen={isNewTaskModalOpen}
          ariaHideApp={false}
          className="modal"
        >
          <NewTaskModal
            closeNewTaskModal={closeNewTaskModal}
            handleTasksChange={handleTasksChange}
          />
        </Modal>
        <Modal isOpen={isEditModalOpen} ariaHideApp={false} className="modal">
          <EditTaskModal
            closeEditModal={closeEditModal}
            handleTasksChange={handleTasksChange}
            currentTask={currentTask}
          />
        </Modal>
        <Modal isOpen={isDeleteModalOpen} ariaHideApp={false} className="modal">
          <DeleteTaskModal
            taskDescription={currentTask.description}
            taskId={currentTask._id}
            closeDeleteModal={closeDeleteModal}
            handleTasksChange={handleTasksChange}
          />
        </Modal>
        <Modal isOpen={isLogoutModalOpen} ariaHideApp={false} className="modal">
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
