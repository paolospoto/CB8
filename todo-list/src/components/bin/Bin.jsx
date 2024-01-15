import styles from "./index.module.scss";

const Bin = () => {
  return (
    <div className={styles.bin}>
      <img src="/public/bin.svg" alt="bin" width={50} />
    </div>
  );
};

export default Bin;
