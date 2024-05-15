import { motion } from "framer-motion";
import { Dots } from "react-activity";
import "react-activity/dist/library.css";
import styles from "./buttonComponent.module.css";

function ButtonComponent({
  style,
  text,
  handler,
  loader,
  disabled,
  indicator,
  children,
}) {
  return (
    <motion.button
      className={`${styles.button} ${style}`}
      whileHover={{
        scale: 1.05,
        backgroundColor: disabled ? "#9ba1a6" : "#fff",
        color: "#000",
      }}
      onClick={handler}
      disabled={disabled}
    >
      {children && children}
      {indicator && <Dots size={13} color="#fff" />}
      {!indicator && text}
    </motion.button>
  );
}

export default ButtonComponent;
