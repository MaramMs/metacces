import React, { useState } from "react";
import styles from "../styles/components/mainLayout.module.css";
import Footer from "./Footer";
import TopNav from "./TopNav";
import TopNavBar from "./TopNavBar";
import { Button } from "antd";
import AddContent from "./AddContent";

const MainLayout = () => {
  const [addPage,setAddPage] = useState(false)
  const handleAddPage =() =>{
    setAddPage(!addPage)
  }
  return (
    <div className={styles.bgWrapper}>
      <div className={styles.container}>
        <TopNav />

        <div className={styles.gradientBorderWrapper}>
          <div className={styles.gradientBorderInner}>
            {/* <TopNavBar /> */}
            <Button className={styles.addPage} onClick={handleAddPage}>
            <img src='/images/plusSmall.svg'/> 

             </Button>
             {
addPage && <AddContent setAddPage={setAddPage}/>
             }
          </div>
        </div>

        <Footer />
      </div>
    </div>
  );
};

export default MainLayout;
