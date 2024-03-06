import React, { useEffect } from "react";
import styles from "../../components/page-layout/page-layout.module.scss";
import { AdvantagesSec } from "../../components/advantages-section/advantages-section";
import { PricesSection } from "../../components/prices-section/prices-section";
import { PortfolioSection } from "../../components/portfolio-section/portfolio-section";
import { AtmosphereSection } from "../../components/atmosphere-section/atmosphere-section";
import { Image } from "../../components/image/image";
import { Intro } from "../../components/intro/intro";

const Header = ({ intro }) => {
  return (
    <header className={styles["header"]}>
      <div className={styles["horizontal-wrap"]}>
        <div className={styles["hero"]}>
          <div className={styles["hero__image-wrap"]}>
            <Image />
          </div>
          <div className={styles["hero__intro-wrap"]}>
            <Intro introData={intro} />
          </div>
        </div>
      </div>
    </header>
  );
};
export const MainScreen = ({
  advantages,
  prices,
  portfolio,
  atmosphere,
  intro,
  visibleSections,
  setVisibleSections,
  setForceUpdate,
}) => {
  useEffect(() => {
    setForceUpdate(false);
    return () => {
      setForceUpdate(true);
    };
  }, []);

  return (
    <>
      <Header intro={intro} />
      <main className="main">
        <AdvantagesSec
          advantagesData={advantages}
          visibleSections={visibleSections}
          setVisibleSections={setVisibleSections}
        />
        <PricesSection
          pricesData={prices}
          visibleSections={visibleSections}
          setVisibleSections={setVisibleSections}
        />
        <PortfolioSection
          portfolioData={portfolio}
          visibleSections={visibleSections}
          setVisibleSections={setVisibleSections}
        />
        <AtmosphereSection atmosphereData={atmosphere} />
      </main>
    </>
  );
};
