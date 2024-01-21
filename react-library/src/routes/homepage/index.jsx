import { useState, useEffect } from "react";
import BookList from "../../components/bookList";
import { HTTP_GET } from "../../utils/http";
import styles from "./index.module.scss";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

import Shell from "../../shell/shell-component/Shell";

export default function Homepage() {
  const [lists, setLists] = useState([]);
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    Promise.all([
      HTTP_GET("/subjects/love.json"),
      HTTP_GET("/subjects/war.json"),
      HTTP_GET("/subjects/adventure.json"),
    ]).then((data) => setLists(data));
  }, []);

  const handleChange = (e) => {
    setInputValue(e.target.value);
  };

  return (
    <Shell header={true} navbar={true} className={styles.Homepage}>
      <div className={styles.wrapper}>
        <input type="text" onChange={handleChange} />
        <Link className={styles.link} to={`/book/${inputValue}`}>
          GO
        </Link>
      </div>
      {lists.map((list, i) => (
        <BookList
          bookListData={list.works}
          title={list.name.toUpperCase()}
          key={i}
        />
      ))}
    </Shell>
  );
}
