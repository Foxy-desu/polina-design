import React, { useEffect, useState, useRef } from "react";
import styles from "./advantages-section.module.scss";
import { SectionHeader } from "../UI/section-header/section-header";
import { InformationBlock } from "../UI/information-block/information-block";
import { useIntersectionObserver } from "../../custom-hooks/use-intersection-observer";
import { useVisibleSections } from "../../custom-hooks/use-visible-sections";

export const AdvantagesSec = ({
  advantagesData,
  visibleSections,
  setVisibleSections,
}) => {
  const header = advantagesData.sectionHeading;
  const advantages = advantagesData.advantages;
  const [isVisible, setIsVisible] = useState(false);
  const section = useRef(null);

  useIntersectionObserver(section, setIsVisible, 1);
  useVisibleSections(section, visibleSections, isVisible, setVisibleSections);
  function renderAdvantages(advantages) {
    return advantages.map((advantage) => {
      return (
        <li key={advantage.id} className="advantages__list-item">
          <InformationBlock
            heading={advantage.heading}
            description={advantage.description}
            descType={advantage.descType}
          />
        </li>
      );
    });
  }

  return (
    <section className={styles["advantages"]} id="advantages" ref={section}>
      <div className={styles["gradient"]}></div>
      <div className={styles["content-wrap"]}>
        <div className={styles["advantages__header"]}>
          <SectionHeader content={header.content} type={header.type} />
        </div>
        <ul className={styles["advantages__list"]}>
          {renderAdvantages(advantages)}
        </ul>
      </div>
    </section>
  );
};
