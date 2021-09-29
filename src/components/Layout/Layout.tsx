import * as React from "react";
import styles from "./styles.module.css";

export default function Layout(props: { children: React.ReactNode }) {
  const { children } = props;
  return (
    <div className={styles.container}>
      <div className={styles.header}></div>
      <div className={styles.menu}></div>
      <div className={styles.content}></div>
      {children}
    </div>
  );
}
