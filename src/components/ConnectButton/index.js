import React from "react";
import styles from "./index.module.scss";

const ConnectButton = ({ btnText, customeStyle }) => {
  return (
    // <div className={styles.box}>
    //   <div className={styles.box_inner}></div>
    // </div>
    <div style={customeStyle} className={styles.container}>
      {btnText}
    </div>
  );
};

export default ConnectButton;
