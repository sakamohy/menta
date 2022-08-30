import TaskModel from "./TaskModel";
import Form from "./Form";

const AddForm = ({ addTask, setIsVisibleAddForm }) => {
  const onClickAddButton = (e, newTitle, newDetail, newDeadLine) => {
    e.preventDefault();

    if (!newTitle) {
      return;
    }
    addTask(new TaskModel(newTitle, newDetail, newDeadLine));
    setIsVisibleAddForm(false);
  };

  const onClickCancelButton = (e) => {
    e.preventDefault();
    setIsVisibleAddForm(false);
  };

  return (
    <Form
      formSubmitButtonName="追加"
      onSubmitForm={onClickAddButton}
      onClickCancelButton={onClickCancelButton}
    />
  );
};

export default AddForm;
