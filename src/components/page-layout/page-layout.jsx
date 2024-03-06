import React, { useCallback, useEffect, useState } from "react";
import styles from "./page-layout.module.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { NavigationBar } from "../navigation-bar/navigation-bar.jsx";
import { SocialList } from "../UI/social-list/social-list.jsx";
import { Footer } from "../footer/footer.jsx";
import { BurgerNav } from "../burger-nav/burger-nav";
import { MainScreen } from "../../screens/main/main-screen";
import { AllPricesScreen } from "../../screens/all-prices/all-prices-screen";
import { OrderScreen } from "../../screens/order/order-screen";

const AsideNav = ({
  pos,
  block,
  navigation,
  visibleSections,
  setVisibleSections,
  socials,
  setPosWrap,
  forceUpdate,
}) => {
  return (
    <aside
      className={
        pos === "open"
          ? `${styles["page-layout__aside"]} ${styles["nav-wrap_open"]}`
          : `${styles["page-layout__aside"]} ${styles["nav-wrap_close"]}`
      }
    >
      {block === "navbar" ? (
        <NavigationBar
          anchorsData={navigation}
          visibleSections={visibleSections}
          setVisibleSections={setVisibleSections}
          forceUpdate={forceUpdate}
        />
      ) : (
        <BurgerNav
          anchorsData={navigation}
          socialData={socials}
          setPos={setPosWrap}
          visibleSections={visibleSections}
          setVisibleSections={setVisibleSections}
          forceUpdate={forceUpdate}
        />
      )}
    </aside>
  );
};
const PageContent = ({
  advantages,
  intro,
  prices,
  portfolio,
  atmosphere,
  visibleSections,
  setVisibleSections,
  setForceUpdate,
  footer,
}) => {
  return (
    <div className={styles["page-layout__content"]}>
      <Routes>
        <Route
          path={"*"}
          element={
            <MainScreen
              advantages={advantages}
              intro={intro}
              prices={prices}
              portfolio={portfolio}
              atmosphere={atmosphere}
              visibleSections={visibleSections}
              setVisibleSections={setVisibleSections}
              setForceUpdate={setForceUpdate}
            />
          }
        />
        <Route
          path={"/all-prices"}
          element={
            <AllPricesScreen
              allPricesData={prices}
              setForceUpdate={setForceUpdate}
            />
          }
        />
        <Route
          path={"/order"}
          element={
            <OrderScreen orderData={prices} setForceUpdate={setForceUpdate} />
          }
        />
      </Routes>
      <Footer footerData={footer} />
    </div>
  );
};
const AsideSocials = ({ socials }) => {
  return (
    <aside
      className={`${styles["page-layout__aside"]} ${styles["socials-wrap"]}`}
    >
      <SocialList socialData={socials} />
    </aside>
  );
};
const PageLayout = ({ data }) => {
  const socials = data.socials;
  const intro = data.header; //пока только обозначила объект из стейта
  const advantages = data.advantagesSection;
  const prices = data.pricesSection;
  const portfolio = data.portfolioSection;
  const atmosphere = data.atmosphereSection;
  const navigation = data.navigation.anchors;
  const footer = data.footer;
  const [block, setBlock] = useState(() => {
    if (window.innerWidth > 1316) return "navbar";
    return "burger";
  });
  const [pos, setPos] = useState("open");
  const setPosWrap = useCallback(
    (val) => {
      setPos(val);
    },
    [setPos],
  );
  const [visibleSections, setVisibleSections] = useState([]);
  const [forceUpdate, setForceUpdate] = useState(false);

  useEffect(() => {
    const handleWindowResize = () => {
      if (window.innerWidth > 1316) setBlock("navbar");
      else {
        setBlock("burger");
      }
    };

    window.addEventListener("resize", handleWindowResize);
    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  return (
    <div className={styles["page-layout"]}>
      <AsideNav
        pos={pos}
        block={block}
        navigation={navigation}
        visibleSections={visibleSections}
        setVisibleSections={setVisibleSections}
        socials={socials}
        setPosWrap={setPosWrap}
        forceUpdate={forceUpdate}
      />
      <PageContent
        advantages={advantages}
        intro={intro}
        prices={prices}
        portfolio={portfolio}
        atmosphere={atmosphere}
        visibleSections={visibleSections}
        setVisibleSections={setVisibleSections}
        setForceUpdate={setForceUpdate}
        footer={footer}
      />
      <AsideSocials socials={socials} />
    </div>
  );
};
export { PageLayout };
