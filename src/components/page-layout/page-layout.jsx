import React, {useCallback, useEffect, useState} from "react";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { NavigationBar } from "../navigation-bar/navigation-bar.jsx";
import { SocialList } from "../UI/social-list/social-list.jsx";
import { Footer } from "../footer/footer.jsx";
import {BurgerNav} from "../burger-nav/burger-nav";
import {MainScreen} from "../../screens/main/main-screen";
import styles from "./page-layout.module.scss";
import {AllPricesScreen} from "../../screens/all-prices/all-prices-screen";
import {OrderScreen} from "../../screens/order/order-screen";


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
                        <Routes>
                            <Route path={"*"} element={
                                <MainScreen
                                    advantages={advantages}
                                    intro={intro}
                                    prices={prices}
                                    portfolio={portfolio}
                                    atmosphere={atmosphere}
                                />
                            }/>
                            <Route path={"/all-prices"} element={
                                <AllPricesScreen allPricesData={{header: {content: "все цены", type: "2" }}}/>
                            }/>
                            <Route path={"/order"} element={
                                <OrderScreen orderData={{header: {content: "заказать", type: "2" }}}/>
                            }/>
                        </Routes>
                    <Footer footerData={footer}/>
                </div>
            <aside className={`${styles["page-layout__aside"]} ${styles["socials-wrap"]}`}>
                <SocialList socialData={socials}/>
            </aside>

        </div>
    )
};
export { PageLayout };