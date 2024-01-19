import Header from "../header/Header";
import Navbar from "../navbar/Navbar";

import styles from "./index.module.scss";

const Shell = ({ header, navbar, children }) => {
  return (
    <div>
      <div className={styles.shell}>
        {header ? <Header></Header> : null}
        {navbar ? <Navbar></Navbar> : null}
      </div>
      {children}
    </div>
  );
};

export default Shell;
