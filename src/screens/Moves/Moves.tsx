import * as React from "react";
import styles from "./style.module.css";
import { AgGrid } from "../../components/AgGrid/AgGrid";
import BeginnerMoves from "./List.json";
import SocialFoundationMoves from "./SFList.json";
import BronzeMoves from "./BronzeList.json";
import SilverMoves from "./SilverList.json";
import GoldMoves from "./GoldList.json";

export default function Moves() {
  return (
    <div className={styles.moveContainer}>
      <h2> Move Name Goes Here</h2>
      <AgGrid
        columns={[
          { field: "step" },
          { field: "count" },
          { field: "footPosition" },
          { field: "amountOfTurn" },
          { field: "footwork" },
          { field: "lead" },
        ]}
        height={600}
        width={window.innerWidth}
      />
    </div>
  );
}
