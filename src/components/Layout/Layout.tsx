import * as React from "react";
import styles from "./style.module.css";
import { Nav, NavItem } from "../Nav/Nav";

export default function Layout(props: { children: React.ReactNode }) {
  const { children } = props;
  const NavList: Array<any> = [
    { to: "/history", label: "History" },
    { to: "/techniques", label: "Techniques" },
    { to: "/moves", label: "Moves" },
    { to: "/resources", label: "Resources" },
    { to: "/glossary", label: "Glossary" },
  ];
  return (
    <div className={styles.container}>
      <div className={styles.header}>
        <h1>Zouk Book</h1>
      </div>

      <div className={styles.content}>
        <div className={styles.menu}>
          <Nav variant={"vertical"}>
            {NavList.map((navItem) => {
              return <NavItem to={navItem.to}>{navItem.label}</NavItem>;
            })}
          </Nav>
        </div>
        <div className={styles.children}>{children}</div>
      </div>
    </div>
  );
}
