import type { ReactNode } from "react";
import styles from "./AppShell.module.scss";
import Sidebar from "../Sidebar/Sidebar";
import Header from "../Header/Header";

type AppShellProps = {
  children: ReactNode;
  title: string;
  description?: string;
  currentStep: number;
  totalSteps: number;
  onNewIdea: () => void;
};

export default function AppShell({
  children,
  title,
  description,
  currentStep,
  totalSteps,
  onNewIdea,
}: AppShellProps) {
  return (
    <div className={styles.appShell}>
      <Sidebar onNewidea={onNewIdea} />

      <div className={styles.mainArea}>
        <Header
          title={title}
          description={description}
          currentStep={currentStep}
          totalSteps={totalSteps}
        />

        <main className={styles.main}>{children}</main>
      </div>
    </div>
  );
}
