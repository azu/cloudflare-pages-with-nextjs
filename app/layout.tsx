import "./global.css";
import { Header } from "./layout/Header";
import { Sidebar } from "./layout/Sidebar";
import styles from "./layout.module.css"
import React from "react";
import { Footer } from "./layout/Footer";

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
        <body>
        <div className={styles.layout}>
            <Header className={styles.header}/>
            <Sidebar className={styles.sidebar}/>
            <main className={styles.main}>{children}</main>
            <Footer className={styles.footer}/>
        </div>
        </body>
        </html>
    )
        ;
}

