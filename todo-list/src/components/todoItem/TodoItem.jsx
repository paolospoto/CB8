import { useState } from "react";

import styles from "./index.module.scss";

const TodoItem = ({ todoData, id, isDone, onCheck }) => {
  const [todoText, setTodoText] = useState(todoData);
  const [isClicked, setIsClicked] = useState(false);

  const handleCheck = (event) => {
    if (event.target.checked) {
      onCheck(todoText, id, true);
    } else {
      onCheck(todoText, id, false);
    }
  };

  const handleClick = () => {
    isClicked ? setIsClicked(false) : setIsClicked(true);
  };

  const handleTodoChange = () => {
    setTodoText(event.target.value);
  };

  const handleKeyDown = () => {
    if (event.key === "Enter") {
      handleTodoChange();
      handleClick();
    }
  };

  return (
    <div className={!isDone ? styles.todo : styles.done}>
      {!isClicked ? (
        <p>{todoText}</p>
      ) : (
        <input
          className={styles.input}
          type="text"
          onChange={handleTodoChange}
          onKeyDown={handleKeyDown}
        />
      )}
      <div className={styles.controls}>
        <input
          className={styles.checkbox}
          checked={isDone ? true : false}
          type="checkbox"
          onChange={handleCheck}
        />
        <button className={styles.button} onClick={handleClick}>
          {!isClicked ? (
            <img src="../public/pen.svg" width={25}></img>
          ) : (
            <img src="../public/confirm.svg" width={25}></img>
          )}
        </button>
      </div>
    </div>
  );
};

export default TodoItem;
