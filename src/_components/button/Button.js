import React from "react";
import styles from "./Button.module.css";

// const Button = ({
//   title,
//   background,
//   padding,
//   color,
//   border,
//   borderRadius,
// }) => {
//   const style = {
//     background: background,
//     padding: padding,
//     color: color,
//     border: border,
//     borderRadius: borderRadius,
//   };

//   return (
//     <button className={styles.button} style={style}>
//       {" "}
//       {title}{" "}
//     </button>
//   );
// };

const Button = ({
  title,
  background,
  padding,
  color,
  border,
  borderRadius,
}) => {
  const style = {
    background: background,
    padding: padding,
    color: color,
    border: border,
    borderRadius: borderRadius,
  };
  return (
    <button className={styles.button} style={style}>
      {title}
    </button>
  );
};

export default Button;
