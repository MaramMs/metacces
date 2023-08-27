import React from "react";
import styles from "../styles/components/mainLayout.module.css";
import Footer from "./Footer";
import TopNav from "./TopNav";
import TopNavBar from "./TopNavBar";

const MainLayout = () => {
  return (
    <div className={styles.bgWrapper}>
      <div className={styles.container}>
        <TopNav />

        <div className={styles.gradientBorderWrapper}>
          <div className={styles.gradientBorderInner}>
            <TopNavBar />
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
