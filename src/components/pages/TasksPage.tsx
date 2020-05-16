import React, { useContext, useState, useEffect } from "react";
import Modal from "react-modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { UserContext } from "../context/UserProvider";
import { GetTasks } from "../../api/index";
import {
  NewTaskForm,
  NewTaskFormProps,
  TaskFormProps,
} from "../base/NewTaskForm";

import {
  TaskCardProps,
  TaskCardListProps,
  TaskCardList,
} from "../base/TaskCard";

const modalStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

Modal.setAppElement("#root");

export const TasksPage: React.FC = () => {
  const userContext = useContext(UserContext);
  const initTasks: TaskCardProps[] = [];
  const [tasks, setTasks] = useState(initTasks);
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const closeModal = () => {
    setModalIsOpen(false);
  };
  const openModal = () => {
    setModalIsOpen(true);
  };
  const newTaskFormProps: NewTaskFormProps = {
    onSubmit: (value: TaskFormProps) => {
      closeModal();
      console.log(value);
    },
  };

  const updateTasks = async () => {
    const tasks = await GetTasks(userContext.token || "");
    if (!tasks) {
      setTasks([]);
    } else {
      setTasks(tasks);
    }
  };
  useEffect(() => {
    updateTasks();
  }, [userContext.token]);
  const taskCardListProps: TaskCardListProps = { tasks: tasks };
  return (
    <div className="overflow-scroll h-screen">
      <div className="">
        <TaskCardList {...taskCardListProps}></TaskCardList>
      </div>
      <div className="fixed bottom-0 right-0 mb-8 mr-8 absolute">
        <div
          className="h-24 w-24 rounded-full bg-selected text-white text-center text-6xl hover:selected-hovered"
          onClick={openModal}
        >
          <FontAwesomeIcon icon={faPlus} />
        </div>
      </div>
      <Modal
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
        style={modalStyles}
        contentLabel="New Task"
      >
        <NewTaskForm {...newTaskFormProps}></NewTaskForm>
      </Modal>
    </div>
  );
};
