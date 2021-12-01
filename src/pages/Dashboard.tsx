import React from "react";
import { useState } from "react";
import Modal from "react-modal";
import { ModifierFlags } from "typescript";

import Task from "../components/Task/Task";
import { TaskParams } from "../components/Task/Task";

import NewTaskModal from "../modals/NewTaskModal";
import EditTaskModal from "../modals/EditTaskModal";
import DeleteTaskModal from "../modals/DeleteTaskModal";

import logoutAll from "../utils/api/logoutAll";

interface TasksProps {
  tasks: any;
}

const handleLogout = (): any => {
  console.log("handlingLogout");
  console.log(sessionStorage.getItem("token"));
  logoutAll(sessionStorage.getItem("token"));
};

const Dashboard = ({ setToken, tasks, token }: any) => {
  const [isNewTaskModalOpen, setNewTaskModalOpen] = useState<boolean>(false);
  const [isEditModalOpen, setEditModalOpen] = useState<boolean>(false);
  const [isDeleteModalOpen, setDeleteModalOpen] = useState<boolean>(false);

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
      {tasks.map((task: any) => (
        <div>
          <Task description={task.description} completed={task.completed} />
          <button>Edit</button>
          <button>Delete</button>
        </div>
      ))}
      <button
        onClick={() => {
          handleLogout();
          setToken("");
        }}
      >
        Logout
      </button>
      <Modal isOpen={isNewTaskModalOpen}>
        <NewTaskModal closeAddModal={closeNewTaskModal} />
      </Modal>
      <Modal isOpen={isEditModalOpen}></Modal>
      <Modal isOpen={isDeleteModalOpen}></Modal>
    </div>
  );
};

export default Dashboard;
