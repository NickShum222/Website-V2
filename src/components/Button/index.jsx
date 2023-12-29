import styles from "./style.module.scss";

const index = ({ label, className }) => {
  return (
    <div
      className={`${className}`}
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
