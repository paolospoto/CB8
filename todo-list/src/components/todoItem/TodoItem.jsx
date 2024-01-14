import { useState } from "react";
import styles from "./index.module.scss";

const TodoItem = ({ todoData, id, isDone, onCheck }) => {
  const [todoText, setTodoText] = useState(todoData);
  const [isClicked, setIsClicked] = useState(false);

  const handleCheck = (event) => {
    if (event.target.checked) {
      onCheck(todoData, id, true);
    } else {
      onCheck(todoData, id, false);
    }
  };

  const handleClick = () => {
    isClicked ? setIsClicked(false) : setIsClicked(true);
  };

  const handleTodoChange = () => {
    setTodoText(event.target.value);
  };

  return (
    <div className={!isDone ? styles.wrapper : styles.wrapper2}>
      {!isClicked ? (
        <p>{todoText}</p>
      ) : (
        <input type="text" onChange={handleTodoChange} />
      )}
      <div>
        <input
          checked={isDone ? true : false}
          type="checkbox"
          onChange={handleCheck}
        />
        <button onClick={handleClick}>{!isClicked ? "MOD" : "CONF"}</button>
      </div>
    </div>
  );
};

export default TodoItem;
