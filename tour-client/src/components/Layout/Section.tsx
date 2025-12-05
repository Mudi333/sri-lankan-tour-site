import React from "react";
import styles from "./Section.module.css";

type SectionProps = {
  children: React.ReactNode;
  id?: string;
  className?: string;
};

export function Section({ children, id, className }: SectionProps) {
  return (<div class="section-wrapper">


    <section id={id} className={`${styles.section} ${className ?? ""}`}>
     
      <div className={styles.inner}>{children}</div>
   
    </section>
      </div>
  );
}
