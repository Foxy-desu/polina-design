import React from "react";
import { NavigationBar } from "../navigation-bar/navigation-bar.jsx";
import { SocialList } from "../UI/social-list/social-list.jsx";
import { Image } from "../image/image.jsx";
import { Intro } from "../intro/intro.jsx";
import { AdvantagesSec } from "../advantages-section/advantages-section.jsx";
import styles from "./page-layout.module.scss";
import { PricesSection } from "../prices-section/prices-section.jsx";
import { PortfolioSection } from "../portfolio-section/portfolio-section.jsx";
import { AtmosphereSection } from "../atmosphere-section/atmosphere-section.jsx";


const PageLayout = ({data}) => {
    const socials = data.socials;
    const intro = data.introCards;
    const advantages = data.advantagesSection
    const prices = data.pricesSection;
    const portfolio = data.portfolioSection;
    const atmosphere = data.atmosphereSection;
    const infoCardText = {
        heading: "кликабельная",
        description: "обложка это 60% успеха!"
    }

    return (
        <div className={styles["page-layout"]}>
            <aside className={`${styles["page-layout__aside"]} ${styles["nav-wrap"]}`}>
                <NavigationBar/>
            </aside>
            <div className="page-layout__content">
                <header className={styles["header"]}>
                    <div className={styles["horizontal-wrap"]}>
                        <div className={styles["hero"]}>
                            <div className={styles["hero__image-wrap"]}>
                                <Image/>
                            </div>
                            <div className={styles["hero__intro-wrap"]}>
                                <Intro cardsData={intro} infoBlockData={infoCardText}/>
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
                <footer>
                contacts
                </footer>
            </div>
            <aside className={`${styles["page-layout__aside"]} ${styles["socials-wrap"]}`}>
                <SocialList data={socials}/>
            </aside>
        </div>
    )
};
export { PageLayout };