import React, { useState } from "react";

const Form = ({
  defaultTitleValue = "",
  defaultDetailValue = "",
  defaultDeadLineValue = "",
  formSubmitButtonName,
  onSubmitForm,
  onClickCancelButton,
}) => {
  const [title, setTitle] = useState(defaultTitleValue);
  const [detail, setDetail] = useState(defaultDetailValue);
  const [deadLine, setDeadLine] = useState(defaultDeadLineValue);

  const inputStyle = {
    width: "100%",
    border: "none",
    outline: "none",
    boxSizing: "border-box",
    fontSize: "15px",
  };

  const textAreaStyle = {
    minHeight: "20px",
    lineHeight: "18px",
    fontSize: "13px",
    resize: "none",
  };

  const buttonStyle = {
    width: "30%",
  };

  const onChangeTitle = (e) => {
    setTitle(e.target.value);
  };

  const onChangeDetail = (e) => {
    setDetail(e.target.value);
  };

  const onChangeDeadLine = (e) => {
    setDeadLine(e.target.value);
  };

  return (
    <>
      <form onSubmit={(e) => onSubmitForm(e, title, detail, deadLine)}>
        <fieldset>
          <input
            placeholder="件名"
            type="text"
            onChange={onChangeTitle}
            value={title}
            style={inputStyle}
          />
          <textarea
            placeholder="説明"
            onChange={onChangeDetail}
            value={detail}
            style={{ ...inputStyle, ...textAreaStyle }}
          />
          <input
            type="datetime-local"
            value={deadLine}
            onChange={onChangeDeadLine}
          />
        </fieldset>
        <div>
          <button type="submit" style={buttonStyle}>
            {formSubmitButtonName}
          </button>
          <button onClick={onClickCancelButton} style={buttonStyle}>
            キャンセル
          </button>
        </div>
      </form>
    </>
  );
};

export default Form;
