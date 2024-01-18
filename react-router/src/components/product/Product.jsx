/* eslint-disable react/prop-types */
import styles from "./index.module.scss";

const Product = ({ productData }) => {
  const { title, thumbnail, description } = productData;
  return (
    <div className={styles.product}>
      <h1>{title}</h1>
      <img src={thumbnail} alt={title} />
      <p>{description}</p>
    </div>
  );
};

export default Product;
