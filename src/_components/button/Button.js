import React from "react";
import styles from "./Button.module.css";
import searchIcon from "../../_assets/svg/search-Icon.svg";

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
  icon,
}) => {
  const style = {
    background: background,
    padding: padding,
    color: color,
    border: border,
    borderRadius: borderRadius,
    // icon: anyIcon,
  };
  return (
    <button className={styles.button} style={style}>
      {icon && <img src={icon} alt="icon" className={styles.btnIcon} />}
      {title}
    </button>
  );
};

export default Button;
