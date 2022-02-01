import React, { useEffect } from "react";
import { useState } from "react";
import Modal from "react-modal";
import { ModifierFlags } from "typescript";
import { Link } from "react-router-dom";

import Task from "../../components/Task/Task";
import { TaskParams } from "../../components/Task/Task";

import NewTaskModal from "../../modals/NewTaskModal";
import EditTaskModal from "../../modals/EditTaskModal";
import DeleteTaskModal from "../../modals/DeleteTaskModal";
import LogoutModal from "../../modals/LogoutModal";

import logoutAll from "../../utils/api/logoutAll";
import getTasks from "../../utils/api/getTasks";

import "./dashboard.scss";

// const getAllTasks = async () => {
//   console.log("getting all tasks");
//   const res = await getTasks();
//   return res;
// };

interface DashboardInterface {
  setIsLoggedIn: (arg: boolean) => void;
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
  const [sortBy, setSortBy] = useState<string>("asc");

  const paramBuilder = () => {
    let params: UrlParams = {};
    params.completedParam = completedFilter
      ? `completed=${completedFilter}`
      : "";

    if (completedFilter === false) {
      params.completedParam = "completed=false";
    }

    console.log(params);
    let skip: string | undefined = undefined;
    if (skipCounter !== 0) {
      skip = `skip=${skipCounter}`;
    }
    params.paginationParam = `limit=${taskLimit}${
      skip ? `skip=${skipCounter}` : ""
    }`;
    //sortBy=createdAt:acs or createdAt:desc
    params.sortParam = `sortBy=createdAt:${sortBy}`;

    return params;
  };

  const handleLogin = async () => {
    let optionalParams: UrlParams = paramBuilder();

    const currentTasks = await getTasks(optionalParams);
    setTasks(currentTasks);
  };

  const handleTasksChange = async () => {
    console.log("handling task change");
    let optionalParams: UrlParams = paramBuilder();

    console.log(optionalParams);

    const currentTasks = await getTasks(optionalParams);
    console.log("COMPLETED FILTER");
    console.log(completedFilter);
    setTasks(currentTasks);
  };

  // React.MouseEvent<HTMLButtonElement, MouseEvent> - replaced with 'any' because TS can't find textContent on e.target
  const handleClick = (e: any) => {
    console.log("handling click");
    e.preventDefault();
    console.log(e.target.textContent);

    switch (e.target.textContent) {
      case "Show completed":
        console.log("showing completed");
        setCompletedFilter(true);
        break;
      case "Show incomplete":
        console.log("showing incomplete");
        setCompletedFilter(false);
        break;
      case "Show all":
        console.log("showing all");
        setCompletedFilter(undefined);
        break;
    }
  };

  const handleChange = (
    e:
  ) => {};

  useEffect(() => {
    handleLogin();
    handleTasksChange();
    setTasks;
  }, [completedFilter]);

  // useEffect(() => {
  //   handleTasksChange();
  // }, [completedFilter]);

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
    }
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={openNewTaskModal}>New Task</button>
      <Link to="/account_settings">
        <button onClick={(e) => e.preventDefault}>Account</button>
      </Link>
      <button
        onClick={() => {
          openLogoutModal();
        }}
      >
        Logout
      </button>
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
    </div>
  );
};

export default Dashboard;
