import Shell from "../../shell/shell-component/Shell";
import { useState } from "react";
import styles from "./index.module.scss";

const Contacts = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
  });

  const handleSubmit = () => {
    setFormData({
      name: "",
      email: "",
      number: "",
    });
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <Shell header={true} navbar={true}>
      <form className={styles.form} onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="username"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="email"
          value={formData.email}
          onChange={handleChange}
        />
        <input
          type="tel"
          name="number"
          placeholder="tel. number"
          value={formData.number}
          onChange={handleChange}
        />
        <button type="submit">Invia</button>
      </form>
    </Shell>
  );
};

export default Contacts;
