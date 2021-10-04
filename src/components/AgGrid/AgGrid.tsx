import * as React from "react";
import cx from "classcat";
import {
  AgGridColumn,
  AgGridReact,
  AgGridReactProps,
  AgGridColumnGroupProps,
  AgGridColumnProps,
} from "ag-grid-react";
import styles from "./AgGrid.module.css";
// ag stylings
import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine.css";
// ag stylings
export const AgGrid = (props: {
  gridOptions?: AgGridReactProps["gridOptions"];
  columns: AgGridColumnProps[];
  height?: number | string;
  width?: number | string;
  containerClassName?: string;
}) => {
  const { gridOptions, columns, height, width, containerClassName } = props;

  return (
    <div className={styles.grid}>
      <div
        className={cx(["ag-theme-alpine", containerClassName])}
        style={{ height: height, maxWidth: width }}
      >
        <AgGridReact {...gridOptions}>
          {columns.map((item, i) => (
            <AgGridColumn key={i} {...item} />
          ))}
        </AgGridReact>
      </div>
    </div>
  );
};
