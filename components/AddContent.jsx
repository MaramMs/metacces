import React, { useState } from "react";
import styles from "../styles/components/addContent.module.css";
import { Input } from "antd";
import AddPage from "./AddPage";
import AddSlider from "./AddSlider";
import AddPicture from "./AddPicture";
import AddVideo from "./AddVideo";
const AddContent = ({setAddPage}) => {
  const contentType = [
    {
      id: 1,
      name: "Page",
    },
    {
      id: 2,
      name: "Slider",
    },
    {
      id: 3,
      name: "Picture",
    },
    {
      id: 4,
      name: "Video",
    },
  ];

  // State to track the selected content type
  const [selectedContentType, setSelectedContentType] = useState("Page");

  // Function to handle content type click
  const handleContentTypeClick = (type) => {
    setSelectedContentType(type === selectedContentType ? null : type);
  };
  // Render the selected content component
  const renderContentComponent = () => {
    switch (selectedContentType) {
      case "Page":
        return <AddPage />;
      case "Slider":
        return <AddSlider />;
      case "Picture":
        return <AddPicture />;
      case "Video":
        return <AddVideo />;
      default:
        return null; // You can return a default component or nothing when no content is selected
    }
  };

  return (
    <div className={styles.addContent}>
      <div className={styles.addContentNav}>
        <div className={styles.nameLabel}>
          <label className={styles.labelInput}>Name</label>
          <Input className={styles.nameInput} />
        </div>
        <div className={styles.contentType}>
          <div className={styles.contentTypeMenu}>
            {contentType.map((type) => {
              const isActive = type.name === selectedContentType;
              const typeClass = isActive
                ? `${styles.type} ${styles.typeActive}`
                : styles.type;
              return (
                <div
                  className={typeClass}
                  key={type.id}
                  onClick={() => handleContentTypeClick(type.name)}
                >
                  {type.name}
                </div>
              );
            })}
          </div>

          <div className={styles.close} onClick={() =>setAddPage(false)}>
            <img src="/images/close.svg" alt="" />
          </div>
        </div>
      </div>

      {/* Render content based on the selected content type */}
      <div>{renderContentComponent()} </div>
    </div>
  );
};

export default AddContent;
