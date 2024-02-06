import React from "react";
import styles from "./page-layout.module.scss";

const PageLayout = (props) => {

    return (
        <div className={styles["page-layout"]}>
            <aside className={styles["aside-left"]}>
                <div className="menu"></div>
            </aside>
            <header className={styles["hero"]}>
                <div></div>
            </header>
            <main className={styles["main"]}>

            </main>
            <aside className={styles["aside-right"]}>
            <div className="social-block"></div>
            </aside>
            <footer className={styles["footer"]}>

            </footer>
        </div>
    )
};
export { PageLayout };