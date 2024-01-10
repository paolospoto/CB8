import { useState } from "react";
import "./index.scss";

const TodoItem = ({ todoItemData, onCheck }) => {
  const { todo } = todoItemData;
  const [isChecked, setIsChecked] = useState(false);

  const handleOnChange = () => {
    setIsChecked(true);
    onCheck(todoItemData, true);
  };

  return (
    <div className="card-item">
      <p>{todo}</p>
      <input type="checkbox" checked={isChecked} onChange={handleOnChange} />
    </div>
  );
};

export default TodoItem;
