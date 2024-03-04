import React, {useEffect, useRef, useState} from "react";
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
};
const Card = ({card, isMinimized})=> {
    const block = React.createRef();
    const [showClass, setShowClass] = useState("");
    const viewportWidth = window.innerWidth;


    useEffect(() => {
        function checkBlocksVisibility() {
            const target = block.current;
            if (target) {
                let windowHeight = window.innerHeight;
                let blockPos = target.getBoundingClientRect().top;

                if(blockPos < windowHeight - 200) {
                    setShowClass("portfolio__card-wrap_show");
                } else {
                    setShowClass("");
                }
            }

        };
        checkBlocksVisibility();

        window.addEventListener('scroll', checkBlocksVisibility);

        return ()=> {
            window.removeEventListener('scroll', checkBlocksVisibility)
        }

    });

    return (
        <div ref={block} key={card.id} className={
            `${isMinimized
                ? `${styles["portfolio__card-wrap"]}${showClass? " " + styles["portfolio__card-wrap_show"]: ""} ${styles["portfolio__card-wrap_minimized"]}`
                : `${styles["portfolio__card-wrap"]}${showClass? " " + styles["portfolio__card-wrap_show"]: ""}`}`}
             >
            <PhotoFrame info={card.info} path={card.path}/>
        </div>
    )
};

export const PortfolioSection = ({portfolioData, setVisibleSections, visibleSections}) => {
    const heading = portfolioData.sectionHeading;
    const cards = portfolioData.portfolioCards;
    const btns = portfolioData.buttons;
    const breakpoint = 415;

    const [width, setWidth] = useState(() => {
        return window.innerWidth
    });
    const [isMinimized, setMinimized] = useState(()=> {
        return width <= breakpoint ? true : false;
    });
    const [isVisible, setIsVisible] = useState(false);
    const section = useRef(null);

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
    }, [width]);
    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.1,
            });

        if (section.current) {
            observer.observe(section.current);
        }

        return()=> {
            if (section.current) {
                observer.unobserve(section.current);
            }
        }

    }, []);

    useEffect(()=> {
        const key = section.current.id;
        const index = visibleSections.indexOf(key);
        if(isVisible) {
            if(index === -1) {
                setVisibleSections([...visibleSections, key])
            }
        }if(!isVisible){
            if(index > -1) {
                setVisibleSections(visibleSections.filter((elem)=> {
                    return elem !== key;
                }));
            }
        }
    }, [isVisible]);

    function renderCards(cards) {

        return cards.map((card)=> {
            return <Card card={card} isMinimized={isMinimized}/>
        })
    }
    function renderButtons(buttons) {

        return buttons.map((button)=> {
            return <div key={button.id} className={styles["portfolio__btn-wrap"]}>
                <Button content={button.content} type={button.type} path={button.to}/>
            </div>
        })
    };

    return (
        <section className={styles["portfolio"]} id="portfolio" ref={section}>
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