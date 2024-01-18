import Shell from "../../shell/shell-component/Shell";
import Product from "../../components/product/Product";
import { useEffect, useState } from "react";

import styles from "./index.module.scss";

const Homepage = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((data) => setProducts(data.products));
  }, []);

  return (
    <Shell header={true} navbar={true}>
      <div className={styles.cardlist}>
        {products.map((product) => (
          <Product productData={product} key={product.title} />
        ))}
      </div>
    </Shell>
  );
};

export default Homepage;
