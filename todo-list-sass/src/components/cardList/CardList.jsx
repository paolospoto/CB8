import TodoItem from "../todoItem/TodoItem";
import { useState, useEffect } from "react";
import "./index.scss";
import DoneItem from "../doneItem/DoneItem";
import InputForm from "../inputForm/InputForm";
import { DragDropContext, Droppable, Draggable } from "react-beautiful-dnd";

const CardList = () => {
  const [todoList, setTodoList] = useState([]);
  const [checkedItems, setCheckedItems] = useState([]);
  const [isClicked, setIsClicked] = useState(false);

  useEffect(() => {
    fetch("https://dummyjson.com/todos")
      .then((res) => res.json())
      .then((data) => setTodoList(data.todos));
  }, []);

  const handleCheck = (item) => {
    console.log(item);
    setCheckedItems((prev) => [...prev, item]);
    setTodoList((prev) => prev.filter((i) => i.id !== item.id));
  };

  const handleNotCheck = (item) => {
    setCheckedItems((prev) => prev.filter((i) => i.id !== item.id));
    setTodoList((prev) => [...prev, item]);
    console.log(checkedItems);
  };

  const handleClick = () => {
    if (!isClicked) {
      setIsClicked(true);
    } else {
      setIsClicked(false);
    }
  };

  const handleNewTodo = (item) => {
    setTodoList((prev) => [...prev, item]);
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

  useEffect(() => {
    console.log(todoList);
  }, [todoList]);

  return (
    <div className="card-list">
      <InputForm onInput={handleNewTodo}></InputForm>
      <button onClick={handleClick}>Done tasks</button>
      <DragDropContext onDragEnd={handleDrop}>
        <Droppable droppableId="ROOT">
          {(provided) => (
            <div
              {...provided.droppableProps}
              type="group"
              ref={provided.innerRef}
            >
              {todoList.map((todo, index) => (
                <Draggable draggableId={todo.todo} key={todo.id} index={index}>
                  {(provided) => (
                    <div
                      {...provided.dragHandleProps}
                      {...provided.draggableProps}
                      ref={provided.innerRef}
                    >
                      <TodoItem
                        todoItemData={todo}
                        key={todo.id}
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

      <div className={isClicked ? "done-list" : "hide"}>
        <button onClick={handleClick}>Back</button>
        {checkedItems.map((todo) => (
          <DoneItem
            doneItemData={todo}
            key={todo.id}
            onCheck={handleNotCheck}
          />
        ))}
      </div>
    </div>
  );
};

export default CardList;
