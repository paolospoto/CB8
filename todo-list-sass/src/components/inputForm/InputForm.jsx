import { useState } from "react";
import "./index.scss";

const InputForm = ({ onInput }) => {
  const [todo, setTodo] = useState("");
  const [inputValue, setInputValue] = useState("");
  const [counter, setCounter] = useState(1000);
  const data = { todo: todo, id: counter };
  const handleChange = () => {
    setInputValue(event.target.value);
    setTodo(event.target.value);
  };

  const handleSubmit = () => {
    setCounter((prev) => prev + 1);
    onInput(data, true);
    setInputValue("");
  };
  return (
    <div className="form">
      <input
        type="text"
        onChange={handleChange}
        value={inputValue}
        placeholder="Es: Buy some wine at the shop"
      />

      <button onClick={handleSubmit}>Invia</button>
    </div>
  );
};

export default InputForm;
