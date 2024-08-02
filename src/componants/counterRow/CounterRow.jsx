import React from "react";
import styles from "../../style/common/counterRow.module.css";
import Title from "../../componants/common/Title";
import Counter from "./Counter";

function CounterRow() {
  return (
    <div className={styles.rowContainer}>
      <Title
        title="Reviews Counter"
      />
      <div className={styles.counterContainer}>
        <Counter number={300} desc="Lorem ipsum dolor sit amet." />
        <Counter number={600} desc="Lorem ipsum dolor sit amet." />
        <Counter number={900} desc="Lorem ipsum dolor sit amet." />
      </div>
    </div>
  );
}

export default CounterRow;
