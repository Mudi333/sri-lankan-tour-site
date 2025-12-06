import React from "react";
import styles from "./Section.module.css";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
    header?: React.ReactNode;
  className?: string;
};

export function Section({ children, id, className }: SectionProps) {
  return (<div className="section-wrapper">


    <section id={id} className={`${styles.section} ${className ?? ""}`}>
     
      <div className={styles.inner}>{children}</div>
   
    </section>
      </div>
  );
}
