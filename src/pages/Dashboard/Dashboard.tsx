import React, { useEffect } from "react";
import { useState } from "react";
import Modal from "react-modal";
import { ModifierFlags } from "typescript";

import Task from "../../components/Task/Task";
import { TaskParams } from "../../components/Task/Task";

import NewTaskModal from "../../modals/NewTaskModal";
import EditTaskModal from "../../modals/EditTaskModal";
import DeleteTaskModal from "../../modals/DeleteTaskModal";

import logoutAll from "../../utils/api/logoutAll";
import getTasks from "../../utils/api/getTasks";

import "./dashboard.scss";

const handleLogout = (): any => {
  console.log("handlingLogout");
  console.log(sessionStorage.getItem("token"));
  logoutAll(sessionStorage.getItem("token"));
};

const getAllTasks = async () => {
  const res = await getTasks();
  return res;
};

const Dashboard = () => {
  const [isNewTaskModalOpen, setNewTaskModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);
  const [tasks, setTasks] = useState<any>([]);

  const handleLogin = async () => {
    console.log("handling login");
    const currentTasks = await getTasks();
    console.log("got tasks");
    console.log(currentTasks);
    setTasks(currentTasks);
  };

  useEffect(() => {
    console.log("using effect");
    console.log(tasks);
    handleLogin();
  }, tasks);

  // useEffect(() => {
  //   const tasks = getAllTasks;
  //   setTasks(tasks);
  // });

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
    setNewTaskModalOpen(true);
  };

  const closeDeleteModal = () => {
    setNewTaskModalOpen(false);
  };

  return (
    <div>
      <h2>Dashboard</h2>
      <button onClick={openNewTaskModal}>New Task</button>
      <div className="wrapper">
        {tasks.map((task: any) => (
          <Task description={task.description} completed={task.completed} />
        ))}
      </div>

      <button
        onClick={() => {
          handleLogout();
        }}
      >
        Logout
      </button>
      <Modal isOpen={isNewTaskModalOpen}>
        <NewTaskModal
          closeNewTaskModal={closeNewTaskModal}
          setTasks={setTasks}
        />
      </Modal>
      <Modal isOpen={isEditModalOpen}></Modal>
      <Modal isOpen={isDeleteModalOpen}></Modal>
    </div>
  );
};

export default Dashboard;
