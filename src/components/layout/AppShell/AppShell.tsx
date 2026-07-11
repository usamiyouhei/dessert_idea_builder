import type { ReactNode } from "react";
import styles from "./AppShell.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

type AppShellProps = {
  children: ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className={styles.appShell}>
      <Sidebar />

      <div className={styles.content}>
        <Header />

        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
