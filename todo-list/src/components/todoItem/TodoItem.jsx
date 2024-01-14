import styles from "./index.module.scss";

const TodoItem = ({ todoData, id, isDone, onCheck }) => {
  const handleCheck = (event) => {
    if (event.target.checked) {
      onCheck(todoData, id, true);
    } else {
      onCheck(todoData, id, false);
    }
  };

  return (
    <div className={!isDone ? styles.wrapper : styles.wrapper2}>
      <p>{todoData}</p>
      <div>
        <input
          checked={isDone ? true : false}
          type="checkbox"
          onChange={handleCheck}
        />
        <button>MODIFY</button>
      </div>
    </div>
  );
};

export default TodoItem;
