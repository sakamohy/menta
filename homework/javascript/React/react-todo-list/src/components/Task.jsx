import React, { useState } from "react";
import EditForm from "./EditForm";

const Task = ({ taskModel, deleteTask, updateTask }) => {
  const [isEding, setIsEding] = useState(false);
  const [isHover, setIsHover] = useState(false);
  const [isDone, setIsDone] = useState(taskModel.isDone);

  const titleStyle = { display: "inline" };

  const titleIsDoneStyle = isDone
    ? {
        textDecoration: "line-through",
        textDecorationColor: "red",
        textDecorationThickness: "3px",
      }
    : null;

  const detailStyle = {
    overflow: "hidden",
    whiteSpace: "nowrap",
    textOverflowe: "ellipsis",
  };

  const detailIsDoneStyle = titleIsDoneStyle;

  const deadLineStyle = { display: "block" };

  const deadLineIsDoneStyle = isDone ? { display: "none" } : null;

  const editButtonStyle = isHover ? null : { display: "none" };

  const editButtonIsDoneStyle = isDone ? { display: "none" } : null;

  const deleteButtonStyle = editButtonStyle;

  const onClickEditButton = () => {
    setIsEding(true);
  };

  const onCLickDeleteButton = () => {
    deleteTask(taskModel.uuid);
  };

  const onMouseEnter = () => {
    setIsHover(true);
  };

  const onMouseLeave = () => {
    setIsHover(false);
  };

  const onChnageCheckBox = (e) => {
    taskModel.isDone = !taskModel.isDone;
    updateTask(e.target.value, taskModel);

    setIsDone((prev) => !prev);
  };

  return (
    <>
      {isEding ? (
        <EditForm
          editTaskModel={taskModel}
          updateTask={updateTask}
          setIsEding={setIsEding}
        />
      ) : (
        <div onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
          <input
            type="checkbox"
            checked={isDone ? "checked" : ""}
            value={taskModel.uuid}
            onChange={onChnageCheckBox}
          />
          <h3 style={{ ...titleStyle, ...titleIsDoneStyle }}>
            {taskModel.title}
          </h3>
          <h4 style={{ ...detailStyle, ...detailIsDoneStyle }}>
            {taskModel.detail}
          </h4>

          <input
            style={{ ...deadLineStyle, ...deadLineIsDoneStyle }}
            type="datetime-local"
            value={taskModel.deadLine}
            readOnly
          />

          <button
            style={{ ...editButtonStyle, ...editButtonIsDoneStyle }}
            onClick={onClickEditButton}
          >
            編集
          </button>
          <button style={deleteButtonStyle} onClick={onCLickDeleteButton}>
            削除
          </button>
        </div>
      )}
    </>
  );
};

export default Task;
