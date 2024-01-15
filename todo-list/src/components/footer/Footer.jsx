import styles from "./index.module.scss";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>See more on my GitHub! </p>
      <a href="https://github.com/paolospoto" rel="noreferrer" target="_blank">
        <img src="/public/git.svg" alt="git-icon" width={50} />
      </a>
    </div>
  );
};

export default Footer;
