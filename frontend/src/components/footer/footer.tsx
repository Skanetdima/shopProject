import styles from "./footer.module.scss";
import { Poppins } from "next/font/google";
import Link from "next/link";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
});

export const FooterComponent = () => {
  return (
    <footer className={poppins.className} id={styles.footer}>
      <div className={styles.footerItemsContainer}>
        <div className={styles.footerItems}>
          <h4>Funiro.</h4>
          <span>
            400 University Drive Suite 200 Coral Gables, <br /> FL 33134 USA
          </span>
        </div>
        <ul>
          <span>Links</span>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <a href="#">Shop</a>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <a href="#">Contact</a>
          </li>
        </ul>
        <ul>
          <span>Help</span>
          <Link href="#">Payment Options</Link>
          <Link href="#">Returns</Link>
          <Link href="#">Privacy Policies</Link>
        </ul>
        <div className={styles.newsletter}>
          <label htmlFor="email" className={styles.label}>
            Newsletter
          </label>
          <div className={styles.form}>
            <input
              type="email"
              id="email"
              className={styles.input}
              placeholder="Enter Your Email Address"
            />
            <button type="submit" className={styles.button}>
              SUBSCRIBE
            </button>
          </div>
        </div>
      </div>
      <div className={styles.footerCopyright}>
        2023 furino. All rights reverved
      </div>
    </footer>
  );
};
