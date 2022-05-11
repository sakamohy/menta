import React, { useState, useMemo } from 'react'
import TaskList from "./components/TaskList";
import AddForm from './components/AddForm';
import Header from './components/Header';


const App = () => {
  const [taskList, setTaskList] = useState([]);
  const [isVisibleAddForm, setIsVisibleAddForm] = useState(false);

  const filterKindEnum = {
    all: 'すべて',
    isDone: '完了',
    isNotDone: '未完了',
  };

  const [filterKind, setFilterKind] = useState(filterKindEnum.all);

  const filterTaskList = useMemo(() => {
    switch (filterKind) {
      case filterKindEnum.all:
        return taskList;
      case filterKindEnum.isDone:
        return taskList.filter(task => task.isDone);
      case filterKindEnum.isNotDone:
        return taskList.filter(task => !task.isDone);
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterKind,taskList]);

  const wholeStyle = {
    margin: 'auto',
    width: '50%',
  }

  const addTask = (task) => {
    setTaskList([...taskList, task]);
  }

  const updateTask = (oldTaskUuid, newTask) => {
    setTaskList(taskList.map((task) => {
      return task.uuid === oldTaskUuid ? newTask : task;
    }));
  }

  const deleteTask = (uuid) => {
    setTaskList(taskList.filter((task) => {
      return task.uuid !== uuid;
    }));
  }

  const onClickAddTask = () => {
    setIsVisibleAddForm(true);
  }

  return (
    <div style={wholeStyle}>
      <Header
        filterKindEnum={filterKindEnum}
        setFilterKind={setFilterKind}
      />
      <TaskList
        filterTaskList={filterTaskList}
        updateTask={updateTask}
        deleteTask={deleteTask} />
      {
        isVisibleAddForm ? (
          <AddForm
            addTask={addTask}
            setIsVisibleAddForm={setIsVisibleAddForm} />
        ) : (
          <>
            <button id="addTask" onClick={onClickAddTask}>+</button>
            <label htmlFor="addTask">タスクを追加</label>
          </>
        )
      }
    </div>
  );
}

export default App;