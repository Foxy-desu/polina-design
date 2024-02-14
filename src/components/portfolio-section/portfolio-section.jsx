import React from "react";
import styles from "./portfolio-section.module.scss";
import { SectionHeader } from "../UI/section-header/section-header";
import { PhotoFrame } from "../UI/photo-frame/photo-frame";
import { Button } from "../UI/button/button";

export const PortfolioSection = ({portfolioData})=> {
    const heading = portfolioData.sectionHeading;
    const cards = portfolioData.portfolioCards;
    const btns = portfolioData.buttons;

    function renderCards(cards) {
        return cards.map((card)=> {
            return <div key={card.id} className={styles["portfolio__card-wrap"]}>
                <PhotoFrame info={card.info} path={card.path}/>
            </div>
        })
    }

    function renderButtons(buttons) {
        return buttons.map((button)=> {
            return <div key={button.id} className={styles["portfolio__btn-wrap"]}>
                <Button content={button.content} type={button.type}/>
            </div>
        })
    }
    return (
        <section className={styles["portfolio"]} id="portfolio">
            <div className={styles["content-wrap"]}>
                <div className={styles["portfolio__header"]}>
                    <SectionHeader content={heading.content} type={heading.type}/>
                </div>
                <div className={styles["portfolio__cards"]}>
                    {renderCards(cards)}
                </div>
                <div className={styles["portfolio__btns"]}>
                    {renderButtons(btns)}
                </div>
            </div>
        </section>
    )
}