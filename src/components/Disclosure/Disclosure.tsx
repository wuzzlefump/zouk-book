import * as React from "react";
import styles from "./style.module.css";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@reach/disclosure";

export function DescriptionDisclosure(props: { children?: any; button: any }) {
  return (
    <div className={styles.description}>
      <Disclosure>
        <DisclosureButton>{props.button}</DisclosureButton>{" "}
        <DisclosurePanel>{props.children}</DisclosurePanel>{" "}
      </Disclosure>
    </div>
  );
}
