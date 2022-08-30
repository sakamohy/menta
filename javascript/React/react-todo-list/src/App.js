import React, { useState } from "react";
import useTaskListState from "./hooks/useTaskListState";
import useFilterSortListState from "./hooks/useFilterSortListState";
import TaskList from "./components/TaskList";
import AddForm from "./components/AddForm";
import Header from "./components/Header";

const App = () => {
  const { taskList, addTask, updateTask, deleteTask } = useTaskListState();
  const { filterKindEnum, setFilterKind, filterTaskList } =
    useFilterSortListState(taskList);
  const [isVisibleAddForm, setIsVisibleAddForm] = useState(false);

  const wholeStyle = {
    margin: "auto",
    width: "50%",
  };

  return (
    <div style={wholeStyle}>
      <Header filterKindEnum={filterKindEnum} setFilterKind={setFilterKind} />
      <TaskList
        filterTaskList={filterTaskList}
        updateTask={updateTask}
        deleteTask={deleteTask}
      />
      {isVisibleAddForm ? (
        <AddForm addTask={addTask} setIsVisibleAddForm={setIsVisibleAddForm} />
      ) : (
        <>
          <button id="addTask" onClick={() => setIsVisibleAddForm(true)}>
            +
          </button>
          <label htmlFor="addTask">タスクを追加</label>
        </>
      )}
    </div>
  );
};

export default App;
