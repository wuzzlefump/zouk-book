import * as React from "react";
import styles from "./style.module.css";
import { AgGrid } from "../../components/AgGrid/AgGrid";
import BeginnerMoves from "./List.json";
import { useParams, useHistory } from "react-router";
import MovesList from "./SilverList.json";

export default function Moves() {
  const [currentMoveName, setCurrentMoveName] = React.useState<string | null>(
    null
  );
  const params = useParams<{ name: string }>();

  type tsteps = {
    step: string;
    count: string;
    footPosition: string;
    amountOfTurn: string;
    footwork: string;
    lead: string;
  };
  type tmoves = {
    name: string;
    description: string;
    steps: Array<tsteps>;
  };
  React.useEffect(() => {}, [currentMoveName]);
  return (
    <div className={styles.moveContainer}>
      <h2 className={styles.select}>{currentMoveName ?? "Choose a Move"}</h2>
      <select
        onChange={(e) => {
          setCurrentMoveName(e.target.value);
        }}
      >
        <option>Choose a Move</option>
        {MovesList.map((items: tmoves, x) => {
          return <option key={x}>{items.name}</option>;
        })}
      </select>
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
        gridOptions={{ rowData: [] }}
      />
    </div>
  );
}
