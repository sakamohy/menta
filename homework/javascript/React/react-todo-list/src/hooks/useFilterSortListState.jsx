import { useState, useMemo } from "react";

// ToDo ソート機能追加。
const useFilterSortListState = (taskList) => {
  const filterKindEnum = {
    all: "すべて",
    isDone: "完了",
    isNotDone: "未完了",
  };

  const [filterKind, setFilterKind] = useState(filterKindEnum.all);

  const filterTaskList = useMemo(() => {
    switch (filterKind) {
      case filterKindEnum.all:
        return taskList;
      case filterKindEnum.isDone:
        return taskList.filter((task) => task.isDone);
      case filterKindEnum.isNotDone:
        return taskList.filter((task) => !task.isDone);
      default:
        break;
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [filterKind, taskList]);

  return { filterKindEnum, setFilterKind, filterTaskList };
};

export default useFilterSortListState;
