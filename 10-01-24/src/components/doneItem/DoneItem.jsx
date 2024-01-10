import { useState } from "react";
import "./index.scss";

const DoneItem = ({ doneItemData, onCheck }) => {
  const { todo, userId } = doneItemData;
  const [isChecked, setIsChecked] = useState(true);

  const handleOnChange = () => {
    setIsChecked(false);
    onCheck(doneItemData, false);
  };

  return (
    <div className="card-item">
      <h2>{userId}</h2>
      <p>{todo}</p>
      <input type="checkbox" checked={isChecked} onChange={handleOnChange} />
    </div>
  );
};

export default DoneItem;
