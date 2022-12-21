import styles from "./Display.module.scss";
import clsx from "clsx";

const Display = ({totalPerPerson, tipPerPerson, handleReset, resetDisabled }) => {

  return (
    <div className={styles.display}>
      <div className={styles.display_option}>
        <div className={styles.display_content}>
          <p className={styles.title}>Tip Amount</p>
          <p className={styles.subtitle}>/ person</p>
        </div>
        <h1 className={styles.amount}>{Number(tipPerPerson).toFixed(2)}$</h1>
      </div>
      <div className={styles.display_option}>
        <div className={styles.display_content}>
          <p className={styles.title}>Total</p>
          <p className={styles.subtitle}>/ person</p>
        </div>
        <h1 className={styles.amount}>{Number(totalPerPerson).toFixed(2)}$</h1>
      </div>
      <button className={clsx(styles.btn, resetDisabled && styles.resetDisabled)} onClick={handleReset} disabled={resetDisabled}>reset</button>
    </div>
  );
};

export default Display;
