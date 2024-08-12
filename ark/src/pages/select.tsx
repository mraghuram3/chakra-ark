import { Select } from "../components/select";
import { MultiSelect } from "../components/multiselect";


import styles from "./styles.module.css";

export const SelectPage = () => {
  return (
    <div className={styles.progressParent}>
      <div className={styles.progressContent}>
        <Select />
      </div>
    </div>
  );
};


export const MultiSelectPage = () => {
    return (
      <div className={styles.progressParent}>
        <div className={styles.progressContent}>
          <MultiSelect />
        </div>
      </div>
    );
  };

// export const ProgressComp = () => {
//   return (
//     <div className="grid">
//       <div className="small">Default</div>
//       <Progress value={80} />
//     </div>
//   );
// };

// export const ProgressComp2 = () => {
//   return (
//     <div className="grid">
//       <div className="small">Custom</div>
//       <Progress
//         value={30}
//         trackClassName={styles.customTrack}
//         indicatorClassName={styles.customRange}
//       />
//     </div>
//   );
// };
