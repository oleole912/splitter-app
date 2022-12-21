import React from "react";
import styles from "./InputNumber.module.scss";
import clsx from "clsx";

function InputNumber({
  label,
  placeholder,
  value,
  onChange,
  type,
  name,
  errorMessage
}) {
  return (
    <div>
      <label className={styles.label}>
        <div className={styles.labelDiv}>
          {label}
          {errorMessage && (
            <span className={styles.errorMessage}>{errorMessage}</span>
          )}
        </div>
      </label>
      <input
        className={clsx(styles.input, errorMessage && styles.error)}
        type={type}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        name={name}
      ></input>
    </div>
  );
}

export default InputNumber;
