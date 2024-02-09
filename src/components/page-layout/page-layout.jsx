import React from "react";
import { NavigationBar } from "../navigation-bar/navigation-bar.jsx";
import { SocialList } from "../UI/social-list/social-list.jsx";
import { Image } from "../image/image.jsx";
import { Intro } from "../intro/intro.jsx";
import styles from "./page-layout.module.scss";


const PageLayout = ({data}) => {
    const socials = data.socials;
    const intro = data.introCards;
    const infoCardText = {
        heading: "кликабельная",
        description: "обложка это 60% успеха!"
    }

    return (
        <div className={styles["page-layout"]}>
            <header className={styles["header"]}>
                <div className={styles["horizontal-wrap"]}>
                    <aside className={`${styles["aside"]} ${styles["nav-wrap"]}`}>
                        <NavigationBar/>
                    </aside>                
                    <div className={styles["hero"]}>
                        <div className={styles["hero__image-wrap"]}>
                            <Image/>
                        </div>
                        <div className={styles["hero__intro-wrap"]}>
                            <Intro cardsData={intro} infoBlockData={infoCardText}/>
                        </div>
                    </div>
                    <aside className={`${styles["aside"]} ${styles["socials-wrap"]}`}>
                        <SocialList data={socials}/>
                    </aside>
                </div>
            </header>
            <main className="main">
                <section className="advantages" id="advantages">
                    <div className={styles["content-wrap"]}>
                        <h2>we are better</h2>
                        <div>
                            infoblock
                            infoblock
                            infoblock
                            infoblock
                        </div>
                    </div>
                </section >
                <section className="prices" id="prices">
                    <div className={styles["content-wrap"]}>
                        <h2>prices</h2>
                        <div>
                            card
                            card
                            card
                        </div>
                        button
                    </div>
                </section>
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
    )
};
export { PageLayout };