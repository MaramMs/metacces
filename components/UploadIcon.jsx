
import React, { useState } from 'react';
import { UploadOutlined } from '@ant-design/icons';
import { Button, message, Upload } from 'antd';
import styles from '../styles/components/footer.module.css'


const UploadIcon = () => {

    const [fileList, setFileList] = useState([]);
  const [uploading, setUploading] = useState(false);
  const handleUpload = () => {
    const formData = new FormData();
    fileList.forEach((file) => {
      formData.append('files[]', file);
    });
    setUploading(true);
    // You can use any AJAX library you like
    fetch('https://www.mocky.io/v2/5cc8019d300000980a055e76', {
      method: 'POST',
      body: formData,
    })
      .then((res) => res.json())
      .then(() => {
        setFileList([]);
        message.success('upload successfully.');
      })
      .catch(() => {
        message.error('upload failed.');
      })
      .finally(() => {
        setUploading(false);
      });
  };

  const props = {
    onRemove: (file) => {
      const index = fileList.indexOf(file);
      const newFileList = fileList.slice();
      newFileList.splice(index, 1);
      setFileList(newFileList);
    },
    beforeUpload: (file) => {
      setFileList([...fileList, file]);
      return false;
    },
    fileList,
  };
  
  return (
    <>

<Upload
      action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
      listType="picture"
      maxCount={1}
    >
      <Button className={styles.btnLoad}>Upload</Button>
    </Upload>
    

  </>

      ) 
      
    

}
export default UploadIcon