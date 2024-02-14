import React from "react";
import { NavigationBar } from "../navigation-bar/navigation-bar.jsx";
import { SocialList } from "../UI/social-list/social-list.jsx";
import { Image } from "../image/image.jsx";
import { Intro } from "../intro/intro.jsx";
import { AdvantagesSec } from "../advantages-section/advantages-section.jsx";
import styles from "./page-layout.module.scss";
import { PricesSection } from "../prices-section/prices-section.jsx";


const PageLayout = ({data}) => {
    const socials = data.socials;
    const intro = data.introCards;
    const advantages = data.advantagesSection
    const prices = data.pricesSection;
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
                    <section className="portfolio" id="portfolio">
                        <div className={styles["content-wrap"]}>
                            <h2>our works</h2>
                            <div>cards...</div>
                            <div>buttons...</div>
                        </div>
                    </section>
                    <section className="atmosphere" id="atmosphere">
                        <div className={styles["content-wrap"]}>
                            <h2>not just an image</h2>
                            <div>
                                infoblock
                                images
                                logo-decoration
                            </div>
                            <div>
                                images
                                infoblock
                                images
                                phones
                            </div>
                        </div>
                    </section>
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