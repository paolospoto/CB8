import Link from "next/link";
import styles from "./index.module.scss";
import { IconQuestionMark, IconSettingsQuestion } from "@tabler/icons-react";

const MainLayout = ({ children }) => {
  return (
    <div className={styles.MainLayout}>
      <nav>
        <ul>
          <li>
            <Link href="/">Homepage</Link>
          </li>
          <li>
            <Link href="/pokedex">Pokedex</Link>
          </li>
          <li>
            <Link href="/help">
              <IconSettingsQuestion />
            </Link>
          </li>
        </ul>
      </nav>

      {children}

      <footer>
        <p>© 2022 Mi Sitio Web. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default MainLayout;
