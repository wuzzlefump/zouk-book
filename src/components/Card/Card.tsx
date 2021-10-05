import * as React from "react";
import styles from "./style.module.css";

export function Card(props: { children: any }) {
  return <div className={styles.card}>{props.children}</div>;
}
