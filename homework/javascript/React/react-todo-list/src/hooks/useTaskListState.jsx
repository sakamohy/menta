import { useState } from "react";

const useTaskListState = () => {
  const [taskList, setTaskList] = useState([]);

  const addTask = (task) => {
    setTaskList([...taskList, task]);
  };

  const updateTask = (oldTaskUuid, newTask) => {
    setTaskList(
      taskList.map((task) => {
        return task.uuid === oldTaskUuid ? newTask : task;
      })
    );
  };

  const deleteTask = (uuid) => {
    setTaskList(
      taskList.filter((task) => {
        return task.uuid !== uuid;
      })
    );
  };

  return { taskList, addTask, updateTask, deleteTask };
};

export default useTaskListState;
