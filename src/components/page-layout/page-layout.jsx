import React, {useCallback, useEffect, useState} from "react";
import { NavigationBar } from "../navigation-bar/navigation-bar.jsx";
import { SocialList } from "../UI/social-list/social-list.jsx";
import { Image } from "../image/image.jsx";
import { Intro } from "../intro/intro.jsx";
import { AdvantagesSec } from "../advantages-section/advantages-section.jsx";
import { PricesSection } from "../prices-section/prices-section.jsx";
import { PortfolioSection } from "../portfolio-section/portfolio-section.jsx";
import { AtmosphereSection } from "../atmosphere-section/atmosphere-section.jsx";
import { Footer } from "../footer/footer.jsx";
import {BurgerNav} from "../burger-nav/burger-nav";
import styles from "./page-layout.module.scss";


const PageLayout = ({data}) => {
    const socials = data.socials;
    const intro = data.header; //пока только обозначила объект из стейта
    const advantages = data.advantagesSection
    const prices = data.pricesSection;
    const portfolio = data.portfolioSection;
    const atmosphere = data.atmosphereSection;
    const navigation = data.navigation.anchors;
    const footer = data.footer;

    const [block, setBlock] = useState(()=> {
        if (window.innerWidth > 1316) return "navbar";
        return "burger";
    })
    const [pos, setPos] = useState("open");
    const setPosWrap = useCallback((val)=> {
        setPos(val);
    }, [setPos])

    useEffect(() => {
        const handleWindowResize = () => {
            if (window.innerWidth > 1316) setBlock("navbar");
            else {
                setBlock("burger");
            }
        };

        window.addEventListener('resize', handleWindowResize);

        return () => {
            window.removeEventListener("resize", handleWindowResize);
        }
    }, []);

    return (
        <div className={styles["page-layout"]}>
            <aside className={
                pos === "open"
                    ? `${styles["page-layout__aside"]} ${styles["nav-wrap_open"]}`
                    : `${styles["page-layout__aside"]} ${styles["nav-wrap_close"]}`
                }>
                {block === "navbar"
                    ? <NavigationBar anchorsData={navigation}/>
                    : <BurgerNav anchorsData={navigation} socialData={socials} setPos={setPosWrap}></BurgerNav>
                }
            </aside>
            <div className={styles["page-layout__content"]}>
                <header className={styles["header"]}>
                    <div className={styles["horizontal-wrap"]}>
                        <div className={styles["hero"]}>
                            <div className={styles["hero__image-wrap"]}>
                                <Image/>
                            </div>
                            <div className={styles["hero__intro-wrap"]}>
                                <Intro introData={intro}/>
                            </div>
                        </div>
                    </div>
                </header>
                <main className="main">
                    <AdvantagesSec advantagesData={advantages}/>
                    <PricesSection pricesData={prices} />
                    <PortfolioSection portfolioData={portfolio}/>
                    <AtmosphereSection atmosphereData={atmosphere}/>
                </main>
                <Footer footerData={footer}/>
            </div>
            <aside className={`${styles["page-layout__aside"]} ${styles["socials-wrap"]}`}>
                <SocialList socialData={socials}/>
            </aside>

        </div>
    )
};
export { PageLayout };