import "../styles/globals.css";

import Link from "next/link";
import styles from "../styles/Home.module.css";

function MyApp({ Component, pageProps }) {
  return (
    <>
      <div className={styles.nav}>
        <Link href="/">
          <h3 className={styles.ntext}>GoodNews</h3>
        </Link>
      </div>
      <Component {...pageProps} />
    </>
  );
}

export default MyApp;
