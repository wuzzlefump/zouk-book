import * as React from "react";
import styles from "./style.module.css";
import { Nav, NavItem } from "../Nav/Nav";

export default function Layout(props: { children: React.ReactNode }) {
  const { children } = props;
  const NavList: Array<any> = [
    { to: "/", label: "History" },
    { to: "/", label: "Techniques" },
    { to: "/", label: "Moves" },
    { to: "/", label: "Glossary" },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Zouk Book</h1>
      </div>
      <div className={styles.menu}></div>
      <div className={styles.content}>
        <Nav variant={"primary"}>
          {NavList.map((navItem) => {
            return <NavItem to={navItem.to}>{navItem.label}</NavItem>;
          })}
        </Nav>
      </div>
      {children}
    </div>
  );
}
