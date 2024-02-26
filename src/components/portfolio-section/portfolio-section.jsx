import React, {useEffect, useState} from "react";
import { SectionHeader } from "../UI/section-header/section-header";
import { PhotoFrame } from "../UI/photo-frame/photo-frame";
import { Button } from "../UI/button/button";
import styles from "./portfolio-section.module.scss";


const ShowMoreBtn = ({isMinimized, setMinimized}) => {

    const button = {
        id: "portBtn0",
        content: "показать больше карточек",
        type: "",
        action: ""
    };
    const [displayMode, setDisplayMode] = useState(isMinimized);

    useEffect(()=> {
        if(isMinimized === true) setDisplayMode(true);
        else setDisplayMode(false);
    }, [isMinimized])

    return (
        <div
            key={button.id}
            className={displayMode
                ? styles["portfolio__btn-wrap"]
                : styles["portfolio__btn-wrap"] + " " + styles["portfolio__btn-wrap_hidden"]}
            onClick={()=> {
                setMinimized(false);
                setDisplayMode(false);
            }}>
            <Button content={button.content} type={button.type}/>
        </div>
    )
}
export const PortfolioSection = ({portfolioData}) => {
    const heading = portfolioData.sectionHeading;
    const cards = portfolioData.portfolioCards;
    const btns = portfolioData.buttons;
    const breakpoint = 415;

    const [width, setWidth] = useState(()=> {
        return window.innerWidth
    })
    const [isMinimized, setMinimized] = useState(()=> {
        return width <= breakpoint ? true : false;
    })

    useEffect(() => {
        const windowResizeHandler = () => {
            setWidth(window.innerWidth);
        };

        window.addEventListener('resize', windowResizeHandler);
        return ()=> {
            window.removeEventListener('resize', windowResizeHandler);
        }
    }, []);
    useEffect(()=> {
        if(width <= breakpoint) setMinimized(true);
        else setMinimized(false);
    }, [width])

    function renderCards(cards) {
        return cards.map((card)=> {
            return <div key={card.id} className={
                isMinimized
                    ? styles["portfolio__card-wrap"] + ' ' + styles["portfolio__card-wrap_minimized"]
                    : styles["portfolio__card-wrap"]}>
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
    };

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
                    <ShowMoreBtn setMinimized={setMinimized} isMinimized={isMinimized}/>
                    {renderButtons(btns)}
                </div>
            </div>
        </section>
    )
}