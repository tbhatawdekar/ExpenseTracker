import Link from "next/link";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <div className={styles.main}>
        <h1>Expense Tracker</h1>
        <p>Welcome to your personal expense tracking application!</p>
        <p>Click the button below to start managing your expenses.</p>
        
        <div className={styles.ctas}>
          <Link href="/expenses" className={styles.primary}>
            View Expenses →
          </Link>
        </div>
      </div>
    </div>
  );
}
