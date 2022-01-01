import React, { useEffect } from "react";
import { useState } from "react";
import Modal from "react-modal";
import { ModifierFlags } from "typescript";

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

  const handleLogin = async () => {
    const currentTasks = await getTasks();
    console.log(currentTasks);
    setTasks(currentTasks);
  };

  const handleTasksChange = async () => {
    const currentTasks = await getTasks();
    console.log(currentTasks);
    setTasks(currentTasks);
  };

  useEffect(() => {
    console.log("using effect");
    handleLogin();
    setTasks;
  }, []);

  const openNewTaskModal = () => {
    setNewTaskModalOpen(true);
  };

  const closeNewTaskModal = () => {
    setNewTaskModalOpen(false);
  };

  const openEditModal = () => {
    setNewTaskModalOpen(true);
  };

  const closeEditModal = () => {
    setNewTaskModalOpen(false);
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
    console.log("closing logout modal");
    setLogoutModalOpen(false);
  };

  const handleLogout = async () => {
    console.log("handlingLogout");
    console.log(sessionStorage.getItem("token"));
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
      <button>Account</button>
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

      <button
        onClick={() => {
          openLogoutModal();
        }}
      >
        Logout
      </button>
      <Modal isOpen={isNewTaskModalOpen}>
        <NewTaskModal
          closeNewTaskModal={closeNewTaskModal}
          handleTasksChange={handleTasksChange}
        />
      </Modal>
      <Modal isOpen={isEditModalOpen}></Modal>
      <Modal isOpen={isDeleteModalOpen}>
        <DeleteTaskModal
          taskDescription={currentTask.description}
          taskId={currentTask._id}
          closeDeleteModal={closeDeleteModal}
          handleTasksChange={handleTasksChange}
        />
      </Modal>
      <Modal isOpen={isLogoutModalOpen}>
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
