import * as React from "react";
import styles from "./style.module.css";
import { AgGrid } from "../../components/AgGrid/AgGrid";
import MovesList from "./List.json";
import { useParams, useHistory } from "react-router";
import { DescriptionDisclosure } from "../../components/Disclosure/Disclosure";

export default function Moves() {
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
    enum: string;
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
        style={{ maxWidth: window.innerWidth }}
        onChange={(e) => {
          let NewName: any =
            MovesList.find((item) => {
              return item.name === e.target.value;
            }) === undefined
              ? { enum: "", name: "", description: "", steps: [] }
              : MovesList.find((item) => {
                  return item.name === e.target.value;
                });
          if (NewName.enum !== undefined) {
            history.push(`/moves/beginner/${NewName.enum}`);
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
            cellStyle: { "white-space": "normal" },
            autoHeight: true,
          },
          {
            field: "count",
            cellStyle: { "white-space": "normal" },
            autoHeight: true,
          },
          {
            field: "count",
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
            cellStyle: { "white-space": "normal" },
            autoHeight: true,
          },
          {
            field: "footwork",
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
      <DescriptionDisclosure
        button={"Description"}
        children={<p>{currentMove?.description}</p>}
      />
    </div>
  );
}
