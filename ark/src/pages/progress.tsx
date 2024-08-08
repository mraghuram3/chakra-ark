import { Progress } from "../components/progress";

import styles from "./styles.module.css";

export const ProgressPage = () => {
  return (
    <div className={styles.progressParent}>
      <div className={styles.progressContent}>
        <ProgressComp />
        <ProgressComp2 />
      </div>
    </div>
  );
};

export const ProgressComp = () => {
  return (
    <div className="grid">
      <div className="small">Default</div>
      <Progress value={80} />
    </div>
  );
};

export const ProgressComp2 = () => {
  return (
    <div className="grid">
      <div className="small">Custom</div>
      <Progress
        value={30}
        trackClassName={styles.customTrack}
        indicatorClassName={styles.customRange}
      />
    </div>
  );
};
