import { Button, Input, Radio, Upload, message } from 'antd'
import React, { forwardRef, useEffect, useRef, useState } from 'react'
import styles from '../styles/components/footer.module.css'
import UploadIcon from './UploadIcon';
import axios from 'axios';
const AddIcon =forwardRef(({addIcon,setShowAddIcon,showAddIcon,},ref) => {
  console.log(ref , 'ref');
  const [value, setValue] = useState();
  const [nameIcon,setNameIcon] = useState('');
  const [image, setImage] = useState();

  const handleImageUpload = (file) => {
    setImage(file);
    return false; // return false so fileList is not updated
  };

  const onChange = (e) => {
    setValue(e.target.value);
  };
  const handelNameIcon = (e) => {
    setNameIcon(e.target.value)
  }

const handelAddIcon =async () =>{
  if (!image || !image.file) {
    message.error("Please upload an image before saving.");
    setShowAddIcon(false)

    return; 
  }
  const iconPosition = value === 1 ? 'right' : 'left';

  const iconData = {
    position: iconPosition, // Set the position based on the user's choice

    name: nameIcon,
    value: value,
    image: URL.createObjectURL(image.file)
  };

  console.log(iconData , 'icon data');

  addIcon(iconData);
  setShowAddIcon(false)
  // try {
  //   const res = await axios.post('',{
  //     icon: nameIcon,
  //     value
  //   })
  // } catch (error) {
    
  // }
}


useEffect(() => {
  // Function to handle click events
  function handleClickOutside(event) {
    if (ref.current && !ref.current.contains(event.target)) {
      setShowAddIcon(false);
    }
  }
  

  // Add the event listener when the component is mounted
  document.addEventListener("click", handleClickOutside);

  // Clean up the event listener when the component is unmounted
  return () => {
    document.removeEventListener("click", handleClickOutside);
  };
}, [showAddIcon]);





  return (
    <div className={styles.addIcon} ref={ref}>
  
<div className={styles.nameLabel}>
   <label className={styles.labelInput}>
    Name
    </label> 
    <Input className={styles.nameInput} onChange={(e) => handelNameIcon(e)}/>
</div>

<Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>Right</Radio>
      <Radio value={2}>Left</Radio>
     
    </Radio.Group>

<div className={styles.icon}>
  <label>Icon</label>
  <div className={styles.btnsIcon}>
    {/* <UploadIcon /> */}
    <Upload
        customRequest={handleImageUpload}
        showUploadList={false}
        beforeUpload={(file) => {
          // Add validation for image file type and size here
          if (!['image/jpeg', 'image/png','image/svg+xml'].includes(file.type)) {
            message.error('Only JPG/PNG files are allowed');
            return false;
          }
          return true;
        }}
      >
        <Button className={styles.btnLoad}>Upload</Button>
      </Upload>



<Button className={styles.btnSave} onClick={handelAddIcon}>Save</Button>
  </div>
  <p className={styles.size}>Size= <span>45*45</span></p>

</div>

    </div>
  )
})

export default AddIcon