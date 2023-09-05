import React, { useState } from 'react'
import styles from '../styles/components/addPicture.module.css'
import { Col, Row,Input, Upload, Button} from 'antd'
import axios from 'axios';
const { TextArea } = Input;

const AddPicture = ({name}) => {
  console.log(name , 'name');
  const [imageUrl, setImageUrl] = useState(null); // Initialize imageUrl as null
const [text ,setText] = useState('');
console.log(text,'text');

const handleChange = async (info) => {
  const file = info.file.originFileObj; // Get the selected file
  const reader = new FileReader();
  reader.onload = (event) => {
    const dataURL = event.target.result;
    setImageUrl(dataURL)
  };
  reader.readAsDataURL(file);
};

const handelUploadImage =() =>{
  // const file = info.file.originFileObj; // Get the selected file

  // try {
  //   // Create a FormData object and append the file to it
  //   const formData = new FormData();
  //   formData.append('image', file);

  //   console.log(file , 'file');

  //   // Make the API request to your backend
  //   // const response = await fetch('YOUR_API_ENDPOINT', {
  //   //   method: 'POST',
  //   //   body: formData,
  //   // });

  //   if (response.ok) {
  //     // Handle the API response here
  //     const responseData = await response.json();
  //     console.log('API response:', responseData);
  //   } else {
  //     // Handle API request errors
  //     console.error('API request error:', response.status, response.statusText);
  //   }
  // } catch (error) {
  //   // Handle any other errors that may occur
  //   console.error('Error uploading file:', error);
  // }
}
  return (
    <div className={styles.addPicture}>
    <Row gutter={[16,16]}>
      <Col md={{span:4}}>
    <label className={styles.label}> Picture</label>
    <p className={styles.size}> Size= <span>1655p * 855p</span> </p>
      </Col>
      <Col md={{span:20}}>
      <div className={styles.uploadImage}>
      <Upload
        name="avatar"
        // listType="picture-card"
        showUploadList={false}
        // action='http://localhost:3000'
        // beforeUpload={beforeUpload}
        onChange={handleChange}
      >
        {imageUrl ? (
    
           <img
            src={imageUrl}
            alt="avatar"
          className={styles.imgUpload}
        
          />
    
        ) : (
          <div className={styles.addImg}>
          <img src='/images/plusImg.svg'/>
        </div>
        )}
      </Upload>
      </div>
      </Col>
    </Row>

    <Row gutter={[16,16]}>
      <Col md={{span:4}}>
    <label> text</label>
      </Col>
      <Col md={{span:20}}>
      <div className={styles.text}>
<TextArea placeholder='text...' onChange={(e) => setText(e.target.value)} value={text}/>


      </div>
      </Col>
    </Row>

   
    <div className={styles.buttonContainer}>
        <Button onClick={handelUploadImage}>Save</Button>
      </div>
    </div>
  
  )
}

export default AddPicture