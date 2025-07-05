import Link from "next/link";
import styles from "./page.module.css";

export default function Expenses() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <h1>Expenses Page</h1>
        <p>Welcome to the expenses tracking section!</p>
        <p>This is where you can manage and view your expenses.</p>
        
        <div className={styles.ctas}>
          <Link href="/" className={styles.primary}>
            ← Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
} 