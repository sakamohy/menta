import TaskModel from "./TaskModel";
import Form from "./Form";

const EditForm = ({ editTaskModel, updateTask, setIsEditing }) => {
  const onCLickEditButton = (e, editTitle, editDetail, editDeadLine) => {
    e.preventDefault();

    const updateTaskModel = new TaskModel(
      editTitle,
      editDetail,
      editDeadLine,
      editTaskModel.isDone
    );
    updateTask(editTaskModel.uuid, updateTaskModel);
    setIsEditing(false);
  };

  const onClickCancelButton = (e) => {
    e.preventDefault();
    setIsEditing(false);
  };

  return (
    <Form
      defaultTitleValue={editTaskModel.title}
      defaultDetailValue={editTaskModel.detail}
      defaultDeadLineValue={editTaskModel.deadLine}
      formSubmitButtonName="更新"
      onSubmitForm={onCLickEditButton}
      onClickCancelButton={onClickCancelButton}
    />
  );
};

export default EditForm;
