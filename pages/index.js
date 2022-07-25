import Head from "next/head";
import Link from "next/link";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <>
      <Head>
        <title>News App</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <div>
        <div className={styles.grid}>
          <Link href="/WallStreet">
            <div className={styles.headline}>
              <h1>Wall Street</h1>
            </div>
          </Link>
          <Link href="/TechCrunch">
            <div className={styles.headline}>
              <h1>Tech Crunch</h1>
            </div>
          </Link>

          <Link href="/BusinessHeadlines">
            <div className={styles.headline}>
              <h1>Business Headlines</h1>
            </div>
          </Link>

          <Link href="Tesla">
            <div className={styles.headline}>
              <h1>Tesla</h1>
            </div>
          </Link>
          <Link href="/Apple">
            <div className={styles.headline}>
              <h1>Apple</h1>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
}
