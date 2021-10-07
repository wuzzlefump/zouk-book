import * as React from "react";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@reach/disclosure";

export function DescriptionDisclosure() {
  return (
    <Disclosure>
      {" "}
      <DisclosureButton>Find out what lies beneath</DisclosureButton>{" "}
      <DisclosurePanel>Here I am! I am the buried treasure!</DisclosurePanel>{" "}
    </Disclosure>
  );
}
