import "./index.css";
import { useEffect } from "react";
import { useState } from "react";

const Post = ({ postData }) => {
  const { title, body, tags, reactions } = postData;
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    fetch(`https://dummyjson.com/users/${postData.userId}`)
      .then((res) => res.json())
      .then((data) => setUserData(data));
  }, []);

  return (
    <div className="Post">
      <div className="Post__Header">
        <img src={userData.image} alt="propic" width="50px" height="50px" />
        <h3>
          - {userData.firstName} {userData.lastName}
        </h3>
      </div>

      <h3 className="Post__title">{title}</h3>
      <p className="Post__content">{body}</p>
      <div className="Post__info">
        <div className="Post__info--gift">
          <span>🎁</span>
          <span>{` ${reactions}`}</span>
        </div>
        <ul className="Post__info--categories">
          {tags.map((tag) => (
            <li key={tag}>{tag}</li>
          ))}
        </ul>
      </div>
      <hr />
    </div>
  );
};

export default Post;
