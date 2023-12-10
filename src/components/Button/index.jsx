import React from "react";
import styles from "./style.module.scss";

const index = ({ label, className }) => {
  return (
    <div
      className={`${className} uppercase text-primary bg-tertiary flex justify-center items-center cursor-pointer font-[700] tracking-tight`}
    >
      <div className={styles.buttonContainer}>
        <div className={styles.perspectiveText}>
          <p>{label}</p>
          <p>{label}</p>
        </div>
      </div>
    </div>
  );
};

export default index;
