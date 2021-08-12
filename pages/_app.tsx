import type {AppProps} from "next/app";
import Image from "next/image";

import styles from "../styles/Home.module.scss";

import "../styles/globals.css";

function App({Component, pageProps}: AppProps) {
  return (
    <>
      <Component {...pageProps} />
      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          rel="noopener noreferrer"
          target="_blank"
        >
          Powered by{" "}
          <span className={styles.logo}>
            <Image alt="Vercel Logo" height={16} src="/vercel.svg" width={72} />
          </span>
        </a>
      </footer>
    </>
  );
}
export default App;
