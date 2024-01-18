import Header from "../header/Header";
import Navbar from "../navbar/Navbar";

import styles from "./index.module.scss";

const Shell = ({ header, navbar, children }) => {
  return (
    <div className={styles.shell}>
      {header ? <Header></Header> : null}
      {navbar ? <Navbar></Navbar> : null}
      {children}
    </div>
  );
};

export default Shell;
