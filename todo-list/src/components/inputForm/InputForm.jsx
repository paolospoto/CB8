import { useState } from "react";
import styles from "./index.module.scss";

const InputForm = ({ onInput }) => {
  const [todo, setTodo] = useState("");
  const [lastAdded, setLastAdded] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [counter, setCounter] = useState(1000);
  const data = { todo: todo, id: counter };
  const handleChange = () => {
    setInputValue(event.target.value);
    setTodo(event.target.value);
  };

  const handleSubmit = () => {
    if (todo === "") return alert("Can't add an empty task!");
    if (lastAdded === todo) return alert("You already added that task!");
    setCounter((prev) => prev + 1);
    onInput(data, true);
    setLastAdded(todo);
    setInputValue("");
  };
  return (
    <div className={styles.wrapper}>
      <input
        className={styles.input}
        type="text"
        onChange={handleChange}
        value={inputValue}
        placeholder="Es: Buy some wine at the shop"
      />

      <button className={styles.button} onClick={handleSubmit}>
        Add
      </button>
    </div>
  );
};

export default InputForm;
