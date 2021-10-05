import * as React from "react";
import styles from "./style.module.css";
import TechniqueList from "./Techniques.json";
import { Card } from "../../components/Card/Card";

export default function Techniques() {
  return (
    <div>
      <div className={styles.container}>
        {TechniqueList.map((item) => {
          return (
            <Card>
              <h3>{item.name}</h3>
              <p>{item.technique}</p>
            </Card>
          );
        })}
      </div>
    </div>
  );
}
