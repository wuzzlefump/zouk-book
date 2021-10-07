import * as React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@reach/disclosure";

export function DescriptionDisclosure(props: { children?: any; button: any }) {
  return (
    <Disclosure>
      {" "}
      <DisclosureButton>{props.button}</DisclosureButton>{" "}
      <DisclosurePanel>{props.children}</DisclosurePanel>{" "}
    </Disclosure>
  );
}
