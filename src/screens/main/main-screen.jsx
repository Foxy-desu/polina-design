import React from "react";
import {AdvantagesSec} from "../../components/advantages-section/advantages-section";
import {PricesSection} from "../../components/prices-section/prices-section";
import {PortfolioSection} from "../../components/portfolio-section/portfolio-section";
import {AtmosphereSection} from "../../components/atmosphere-section/atmosphere-section";
import styles from "../../components/page-layout/page-layout.module.scss";
import {Image} from "../../components/image/image";
import {Intro} from "../../components/intro/intro";

export const MainScreen = ({advantages, prices, portfolio, atmosphere, intro}) => {

    return (
        <>
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
                <PricesSection pricesData={prices}/>
                <PortfolioSection portfolioData={portfolio}/>
                <AtmosphereSection atmosphereData={atmosphere}/>
            </main>
        </>
    )
}