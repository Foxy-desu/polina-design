import React, {useEffect, useState, useRef} from "react";
import styles from "./advantages-section.module.scss";
import { SectionHeader } from "../UI/section-header/section-header";
import { InformationBlock } from "../UI/information-block/information-block";

export const AdvantagesSec = ({advantagesData, visibleSections, setVisibleSections}) => {
    const header = advantagesData.sectionHeading;
    const advantages = advantagesData.advantages;
    const [isVisible, setIsVisible] = useState(false);
    const section = useRef(null);

    useEffect(()=> {
        const observer = new IntersectionObserver(
            ([entry])=> {
                setIsVisible(entry.isIntersecting);
            },
            {
                root: null,
                rootMargin: '0px',
                threshold: 0.7,
            }
        );

        if(section.current) {
            observer.observe(section.current);
        }

        return ()=> {
            if(section.current) {
                observer.unobserve(section.current);
            }
        };
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

    function renderAdvantages(advantages) {
        return (
            advantages.map((advantage)=> {
                return (
                    <li key={advantage.id} className="advantages__list-item">
                        <InformationBlock heading={advantage.heading} description={advantage.description} descType={advantage.descType}/>
                    </li>
                )
            })
        )
    }

    return (
    <section className={styles["advantages"]} id="advantages" ref={section}>
        <div className={styles["gradient"]}></div>
        <div className={styles["content-wrap"]}>
            <div className={styles["advantages__header"]}>
                <SectionHeader content={header.content} type={header.type}/>
            </div> 
            <ul className={styles["advantages__list"]}>
                {renderAdvantages(advantages)}
            </ul>
        </div>
    </section >
    )
}