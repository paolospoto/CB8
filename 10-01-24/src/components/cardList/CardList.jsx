import TodoItem from "../todoItem/TodoItem";
import { useState, useEffect } from "react";
import "./index.scss";
import DoneItem from "../doneItem/DoneItem";

const CardList = () => {
  const [todoList, setTodoList] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setTodoList(data.todos));
  }, []);

  const handleCheck = (item) => {
    setCheckedItems((prev) => [...prev, item]);
    setTodoList((prev) => prev.filter((i) => i.id !== item.id));
  };

  const handleNotCheck = (item) => {
    setCheckedItems((prev) => prev.filter((i) => i.id !== item.id));
    setTodoList((prev) => [...prev, item]);
    console.log(checkedItems);
  };

  return (
    <div className="card-list">
      {todoList.map((todo) => (
        <TodoItem todoItemData={todo} key={todo.id} onCheck={handleCheck} />
      ))}

      <h1>Good Job!</h1>
      {checkedItems.map((todo) => (
        <DoneItem doneItemData={todo} key={todo.id} onCheck={handleNotCheck} />
      ))}
    </div>
  );
};

export default CardList;
