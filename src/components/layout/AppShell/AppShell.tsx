import type { ReactNode } from "react";
import styles from "./AppShell.module.scss";
import Sidebar from "../Sidebar/Sidebar";

type AppShellProps = {
  children: ReactNode;
};

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className={styles.appShell}>
      <Sidebar />

      <main className={styles.main}>{children}</main>
    </div>
  );
}
