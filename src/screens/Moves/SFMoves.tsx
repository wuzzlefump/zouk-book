import * as React from "react";
import styles from "./style.module.css";
import { AgGrid } from "../../components/AgGrid/AgGrid";
import { useParams, useHistory } from "react-router";
import SFMovesList from "./SFList.json";

export default function SFMoves() {
  const history = useHistory();
  const params = useParams<{ name: string }>();
  let currentName = params.name;
  let currentMove = SFMovesList.find((item: any) => {
    return item.enum === currentName;
  });

  type tsteps = {
    step: string;
    count: string;
    footPosition: string;
    amountOfTurn: string;
    footwork: string;
    lead: string;
  };
  type tmoves = {
    enum: string;
    name: string;
    description: string;
    steps: Array<tsteps>;
  };

  return (
    <div className={styles.moveContainer}>
      <h2 className={styles.select}>{currentMove?.name ?? "Choose a Move"}</h2>
      <select
        onChange={(e) => {
          let NewName: any =
            SFMovesList.find((item) => {
              return item.name === e.target.value;
            }) === undefined
              ? { enum: "", name: "", description: "", steps: [] }
              : SFMovesList.find((item) => {
                  return item.name === e.target.value;
                });
          if (NewName.enum !== undefined) {
            history.push(`/moves/sf/${NewName.enum}`);
          }
        }}
      >
        <option>Choose a Move</option>
        {SFMovesList.map((items: any, x) => {
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
        gridOptions={{ rowData: currentMove?.steps ?? [] }}
      />
    </div>
  );
}
