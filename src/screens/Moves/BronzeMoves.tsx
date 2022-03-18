import * as React from "react";
import styles from "./style.module.css";
import { AgGrid } from "../../components/AgGrid/AgGrid";
import { useParams, useHistory } from "react-router";
import MovesList from "./BronzeList.json";

export default function BronzeMoves() {
  const history = useHistory();
  const params = useParams<{ name: string }>();
  let currentName = params.name;
  let currentMove = MovesList.find((item: any) => {
    return item.enum === currentName;
  });

  type tsteps = {
    step: string;
    count: string;
    footMovement: string;
    amountOfTurn: string;
    footwork: string;
    lead: string;
  };
  type tmoves = {
    name: string;
    description: string;
    steps: Array<tsteps>;
  };
  return (
    <div
      style={{ maxWidth: window.innerWidth }}
      className={styles.moveContainer}
    >
      <h2 className={styles.select}>{currentMove?.name ?? "Choose a Move"}</h2>
      <select
        onChange={(e) => {
          console.log(e.target.value);

          let NewName: any = MovesList.find((item) => {
            return item.name.trim() == e.target.value.trim();
          });

          if (NewName.enum !== undefined) {
            history.push(`/moves/bronze/${NewName.enum}`);
          }
        }}
      >
        <option>Choose a Move</option>
        {MovesList.map((items: any, x) => {
          return <option key={x}>{items.name}</option>;
        })}
      </select>
      <AgGrid
        columns={[
          {
            field: "step",
            width: 300,
            cellStyle: { "white-space": "normal" },
            autoHeight: true,
          },
          {
            field: "count",
            width: 300,
            cellStyle: { "white-space": "normal" },
            autoHeight: true,
          },
          {
            field: "footMovement",
            width: 300,
            cellStyle: { "white-space": "normal" },
            autoHeight: true,
          },
          {
            field: "amountOfTurn",
            width: 300,
            cellStyle: { "white-space": "normal" },
            autoHeight: true,
          },
          {
            field: "footwork",
            width: 300,
            cellStyle: { "white-space": "normal" },
            autoHeight: true,
          },
          {
            field: "lead",
            width: 300,
            cellStyle: { "white-space": "normal" },
            autoHeight: true,
          },
        ]}
        height={600}
        width={window.innerWidth}
        gridOptions={{ rowData: currentMove?.steps ?? [] }}
      />
    </div>
  );
}
