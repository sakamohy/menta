import React from "react";
import Task from "./Task.jsx";

const TaskList = ({ filterTaskList, updateTask, deleteTask }) => {
  const taskListStyle = {
    padding: "10px",
    listStyle: "none",
  };

  const taskStyle = {
    borderBottom: "solid 1px gray",
    margin: "10px",
  };

  return (
    <>
      <ul style={taskListStyle}>
        {filterTaskList.map((task, index) => {
          return (
            <li key={index} style={taskStyle}>
              <Task
                key={index}
                taskModel={task}
                deleteTask={deleteTask}
                updateTask={updateTask}
              />
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default TaskList;
