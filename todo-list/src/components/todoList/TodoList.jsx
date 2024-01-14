import { useState, useEffect } from "react";
import TodoItem from "../todoItem/TodoItem";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [checkedList, setCheckedList] = useState([]);
  const [isRendered, setIsRendered] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setTodoList(data.todos));
  }, []);

  const handleCheck = (todo, id, check) => {
    if (check) {
      setCheckedList((prev) => [...prev, { todo: todo, id: id }]);
      setTodoList((prev) => prev.filter((i) => i.todo !== todo));
    } else {
      console.log(todo);
      setCheckedList((prev) => prev.filter((i) => i.todo !== todo));
      setTodoList((prev) => [...prev, { todo: todo, id: id }]);
    }
  };

  const handleListRendering = () => {
    isRendered ? setIsRendered(false) : setIsRendered(true);
  };

  useEffect(() => {
    console.log("todo", todoList);
    console.log("checked", checkedList);
  }, [todoList, checkedList]);

  return (
    <div>
      <button onClick={handleListRendering}>see checked</button>
      {todoList.map((item) => (
        <TodoItem
          todoData={item.todo}
          id={item.id}
          key={item.id}
          isDone={false}
          onCheck={handleCheck}
        ></TodoItem>
      ))}

      {isRendered
        ? checkedList.map((item) => (
            <TodoItem
              todoData={item.todo}
              id={item.id}
              key={item.id}
              isDone={true}
              onCheck={handleCheck}
            ></TodoItem>
          ))
        : null}
    </div>
  );
};

export default TodoList;
