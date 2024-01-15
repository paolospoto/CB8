import { useState, useEffect } from "react";
import InputForm from "../inputForm/InputForm";
import TodoItem from "../todoItem/TodoItem";

import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styles from "./index.module.scss";
import Bin from "../bin/Bin";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [checkedList, setCheckedList] = useState([]);
  const [isRendered, setIsRendered] = useState(false);
  const [isDragging, setIsDragging] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setTodoList(data.todos));
  }, []);

  const createTodo = (item) => {
    const tempTodoList = [...todoList];

    tempTodoList.unshift(item);

    setTodoList(tempTodoList);
  };

  const handleCheck = (todo, id, check) => {
    if (check) {
      setCheckedList((prev) => [...prev, { todo: todo, id: id }]);
      setTodoList((prev) => prev.filter((i) => i.todo !== todo));
    } else {
      setCheckedList((prev) => prev.filter((i) => i.todo !== todo));
      setTodoList((prev) => [...prev, { todo: todo, id: id }]);
    }
  };

  const handleListRendering = () => {
    isRendered ? setIsRendered(false) : setIsRendered(true);
  };

  const handleDrop = (results) => {
    const { source, destination } = results;
    const tempTodoList = [...todoList];
    const sourceIndex = source.index;
    const destinationIndex = destination.index;

    if (destination.droppableId === "TRASH") {
      tempTodoList.splice(sourceIndex, 1);
      setIsDragging(false);
      return setTodoList(tempTodoList);
    }

    const [removedTodo] = tempTodoList.splice(sourceIndex, 1);

    tempTodoList.splice(destinationIndex, 0, removedTodo);

    setIsDragging(false);
    setTodoList(tempTodoList);
  };

  const handleDragStart = () => {
    setIsDragging(true);
  };

  return (
    <div className={styles.main_section}>
      <DragDropContext onDragStart={handleDragStart} onDragEnd={handleDrop}>
        <Droppable droppableId="TRASH">
          {(provided) => (
            <div
              {...provided.droppableProps}
              type="group"
              className={styles.trash}
              ref={provided.innerRef}
            >
              {!isDragging ? (
                <InputForm onInput={createTodo}></InputForm>
              ) : (
                <Bin></Bin>
              )}
            </div>
          )}
        </Droppable>
        <button onClick={handleListRendering} className={styles.button}>
          <img src="/public/done.svg" alt="done-items" width={25} />
        </button>
        <Droppable droppableId="ROOT">
          {(provided) => (
            <div
              {...provided.droppableProps}
              type="group"
              className={styles.list}
              ref={provided.innerRef}
            >
              {todoList.map((item, index) => (
                <Draggable draggableId={item.todo} key={item.id} index={index}>
                  {(provided) => (
                    <div
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                    >
                      <TodoItem
                        todoData={item.todo}
                        id={item.id}
                        key={item.id}
                        isDone={false}
                        onCheck={handleCheck}
                      />
                    </div>
                  )}
                </Draggable>
              ))}
              {provided.placeholder}
            </div>
          )}
        </Droppable>
      </DragDropContext>

      {isRendered ? (
        <div className={styles.done_list}>
          <button onClick={handleListRendering} className={styles.button}>
            <img src="/public/back.svg" alt="done-items" width={25} />
          </button>
          {checkedList.map((item) => (
            <TodoItem
              todoData={item.todo}
              id={item.id}
              key={item.id}
              isDone={true}
              onCheck={handleCheck}
            ></TodoItem>
          ))}
        </div>
      ) : null}
    </div>
  );
};

export default TodoList;
