import { useState, useEffect } from "react";
import InputForm from "../inputForm/InputForm";
import TodoItem from "../todoItem/TodoItem";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";
import styles from "./index.module.scss";

const TodoList = () => {
  const [todoList, setTodoList] = useState([]);
  const [checkedList, setCheckedList] = useState([]);
  const [isRendered, setIsRendered] = useState(false);

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

    if (!destination) return;

    if (source.index === destination.index) return;

    const sourceIndex = source.index;
    const destinationIndex = destination.index;

    const tempTodoList = [...todoList];

    const [removedTodo] = tempTodoList.splice(sourceIndex, 1);

    tempTodoList.splice(destinationIndex, 0, removedTodo);

    setTodoList(tempTodoList);
  };

  return (
    <div className={styles.main_section}>
      <InputForm onInput={createTodo}></InputForm>
      <button onClick={handleListRendering} className={styles.button}>
        <img src="/public/done.svg" alt="done-items" width={25} />
      </button>
      <DragDropContext onDragEnd={handleDrop}>
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
