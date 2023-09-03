import React from 'react'
import styles from '../styles/components/addPicture.module.css'
import { Col, Row,Input, Upload} from 'antd'
const { TextArea } = Input;

const AddPicture = () => {
  const uploadButton = (
 
      <div className={styles.addImg}>
        <img src='/images/plusImg.svg'/>
      </div>
  
  );
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
        listType="picture-card"
        className="avatar-uploader"
        showUploadList={false}
        action="https://www.mocky.io/v2/5cc8019d300000980a055e76"
        // beforeUpload={beforeUpload}
        // onChange={handleChange}
      >
        {uploadButton}
        {/* {imageUrl ? (
          <img
            src={imageUrl}
            alt="avatar"
            style={{
              width: '100%',
            }}
          />
        ) : (
          uploadButton
        )} */}
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
<TextArea />


      </div>
      </Col>
    </Row>
    </div>
  )
}

export default AddPicture