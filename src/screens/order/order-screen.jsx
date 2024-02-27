import React from "react";
import styles from "./order-screen.module.scss";
import {SectionHeader} from "../../components/UI/section-header/section-header";

export const OrderScreen = ({orderData}) => {

    return (
        <section className={styles["order"]} id="order">
            <div className={styles["gradient"]}></div>
            <div className={styles["content-wrap"]}>
                <div className={styles["order__header"]}>
                    <SectionHeader content={orderData.header.content} type={orderData.header.type}/>
                </div>
                <form>
                    форма
                </form>
            </div>
        </section>
    )
}