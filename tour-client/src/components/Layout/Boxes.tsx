import React from "react";
import styles from "../Layout/Boxes.module.css";

type BoxProps = {
  children: React.ReactNode;
  className?: string;
};

export function Box({ children, className }: BoxProps) {
  return <div className={`${styles.box} ${className ?? ""}`}>{children}</div>;
}
