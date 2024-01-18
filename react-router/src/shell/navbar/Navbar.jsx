import { Link } from "react-router-dom";

import styles from "./index.module.scss";

const Navbar = () => {
  return (
    <div className={styles.navbar}>
      <li>
        <Link className={styles.list} to={"/"}>
          <img src="./public/home.svg" alt="home" />
        </Link>
      </li>
      <li>
        <Link className={styles.list} to={"/about"}>
          <img src="./public/about.svg" alt="about" />
        </Link>
      </li>
      <li>
        <Link className={styles.list} to={"/contacts"}>
          <img src="./public/contact.svg" alt="contact" />
        </Link>
      </li>
    </div>
  );
};

export default Navbar;
