import Shell from "../../shell/shell-component/Shell";
import styles from "./index.module.scss";

const About = () => {
  return (
    <Shell header={true} navbar={true}>
      <div className={styles.about}>
        <h1>About Us</h1>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi
          temporibus animi doloribus similique sapiente, deserunt enim facere
          error nisi beatae ea ducimus aspernatur quis omnis laudantium! Nobis
          rem unde, impedit tempore quia tempora totam quis veniam perspiciatis
          autem consequuntur fuga voluptas voluptate numquam officia voluptatum
          id mollitia nemo iste architecto sit? Amet, qui veritatis assumenda
        </p>
      </div>
    </Shell>
  );
};

export default About;
