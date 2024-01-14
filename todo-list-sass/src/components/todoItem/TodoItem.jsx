import { useState } from "react";
import "./index.scss";

const TodoItem = ({ todoItemData, onCheck }) => {
  const [todoText, setTodoText] = useState(todoItemData.todo);
  const [isChecked, setIsChecked] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const data = { todo: todoText, id: todoItemData.id };

  const handleOnChange = () => {
    setIsChecked(true);
    onCheck(data, true);
  };

  const handleClick = () => {
    !isClicked ? setIsClicked(true) : setIsClicked(false);
  };

  const handleTodoChange = () => {
    setTodoText(event.target.value);
  };

  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      setIsClicked(false);
    }
  };

  return (
    <div className="card-item">
      <div className="wrapper">
        {!isClicked ? (
          <p>{todoText}</p>
        ) : (
          <input type="text" onChange={handleTodoChange} />
        )}
        <input
          className="check"
          type="checkbox"
          checked={isChecked}
          onChange={handleOnChange}
          onKeyDown={handleKeyDown}
        />
      </div>

      <button onClick={handleClick}>✍</button>
    </div>
  );
};

export default TodoItem;
