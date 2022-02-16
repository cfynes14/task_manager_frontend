import React, { useEffect, useCallback, FormEventHandler } from "react";
import { useState } from "react";
import Modal from "react-modal";
import { ModifierFlags } from "typescript";
import { Link } from "react-router-dom";
// import { useStateWithCallback } from "use-state-with-callback";

import Task from "../../components/Task/Task";
import { TaskParams } from "../../components/Task/Task";
import { UrlParams } from "../../utils/api/getTasks";

import NewTaskModal from "../../modals/NewTaskModal";
import EditTaskModal from "../../modals/EditTaskModal";
import DeleteTaskModal from "../../modals/DeleteTaskModal";
import LogoutModal from "../../modals/LogoutModal";

import logoutAll from "../../utils/api/logoutAll";
import getTasks from "../../utils/api/getTasks";

import DashStyles from "./styles";

import "./dashboard.scss";

// const getAllTasks = async () => {
//   console.log("getting all tasks");
//   const res = await getTasks();
//   return res;
// };

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

  const handleLogin = async () => {
    let optionalParams: UrlParams = paramBuilder();
    console.log("handling login");
    const currentTasks = await getTasks(optionalParams);
    setTasks(currentTasks);
    if (currentTasks) {
      console.log("account page setting isloading false");
      setIsLoading(false);
    }
  };

  const handleTasksChange = async () => {
    let optionalParams: UrlParams = paramBuilder();

    const currentTasks = await getTasks(optionalParams);
    setTasks(currentTasks);
  };

  // React.MouseEvent<HTMLButtonElement, MouseEvent> - replaced with 'any' because TS can't find textContent on e.target
  const handleClick = (e: any) => {
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
      case "Show completed":
        setCompletedFilter(true);
        break;
      case "Show incomplete":
        setCompletedFilter(false);
        break;
      case "Show all":
        setTaskLimit(0);
        setCompletedFilter(undefined);
        setPageNumber(0);
        break;
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
    // console.log("changing");
    // console.log(typeof e.target.value);
    // console.log(e.target.name);
    if (e.target.name === "limitSelect") {
      setTaskLimit(parseInt(e.target.value));
    } else {
      // console.log(e.target.value);
      switch (e.target.value) {
        case "newest":
          setSortBy("asc");
          break;
        case "oldest":
          setSortBy("desc");
      }
    }
  };

  useEffect(() => {
    setIsLoading(true);
  }, []);

  useEffect(() => {
    handleLogin();
    handleTasksChange();
    setTasks;
  }, [completedFilter]);

  // useEffect(() => {
  //   handleTasksChange();
  // }, [completedFilter]);

  useEffect(() => {
    handleTasksChange();
  }, [taskLimit]);

  useEffect(() => {
    handleTasksChange();
  }, [sortBy]);

  useEffect(() => {
    handleTasksChange();
  }, [skipCounter]);

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
          <h2>Dashboard</h2>
          <button onClick={openNewTaskModal}>New Task</button>
          <Link to="/account_settings">
            <button onClick={(e) => e.preventDefault}>Account</button>
          </Link>
          <button
            className="dashButton"
            onClick={() => {
              openLogoutModal();
            }}
          >
            Logout
          </button>
          <button className="dashButton" onClick={(e) => handleClick(e)}>
            Show all
          </button>
          <button className="dashButton" onClick={(e) => handleClick(e)}>
            Show completed
          </button>
          <button className="dashButton" onClick={(e) => handleClick(e)}>
            Show incomplete
          </button>
          <p>Limit page to:</p>
          <select
            name="limitSelect"
            id=""
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleChange(e)
            }
          >
            <option value="0">No limit</option>
            <option value="5">5</option>
            <option value="10">10</option>
            <option value="15">15</option>
          </select>
          <p>Sort by</p>
          <select
            name="filterSelect"
            onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
              handleChange(e)
            }
          >
            {/* <option value="completedFirst">Completed first</option>
        <option value="incompleteFirst">Incomplete first</option> */}
            <option value="newest">Newest</option>
            <option value="oldest">Oldest</option>
            <option>A-Z</option>
          </select>
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
                <span
                  className="pageButton"
                  onClick={(
                    e: React.MouseEvent<HTMLButtonElement, MouseEvent>
                  ) => handleClick(e)}
                >
                  {page}
                </span>
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
